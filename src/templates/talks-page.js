// Gatsby GraphQL query helper
import {graphql} from "gatsby";

// React core
import * as React from "react";

// Main layout component
import Layout from "../components/layouts/layout";

// Bootstrap layout components
import {Container} from "react-bootstrap";

// Header image component
import HeaderImage from "../components/elements/headerImage";

// Map display component
import Map from "../components/elements/map";

// Tag list component
import Tags from "../components/elements/tag";

// SEO metadata component
import Seo from "../components/structure/SEO";

// Helper for formatting reading time
import {formatReadingTime} from "../utils/helpers";

// Header with breadcrumbs component
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

// IIIF section component for displaying manifests
import IIIFSection from "../components/structure/IIIFSection";

// Main template for the Talks page
const TalksPageTemplate = React.memo(({data: {markdownRemark}, pageContext}) => {
    const {frontmatter, timeToRead, html} = markdownRemark;
    const isSSR = typeof window === "undefined";
    const breadcrumb = pageContext?.breadcrumb;
    // Memoize the reading time string
    const readingTimeText = React.useMemo(() => 
        formatReadingTime(timeToRead), 
        [timeToRead]
    );

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background} />
            <HeaderWithBreadcrumbs
                breadcrumbs={breadcrumb?.crumbs || []}
                title={frontmatter.title}
                date={frontmatter.date}
                readingTime={readingTimeText}
            />
            <Container className="post-body text-break">
                <div
                    className="bg-white text-black p-4"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </Container>
            {!isSSR && frontmatter.manifests && frontmatter.manifests.length > 0 && (
                <IIIFSection manifests={frontmatter.manifests} />
            )}
            <Tags tags={frontmatter.tags} />
            {!isSSR && frontmatter.geo_lat && (
                <Map
                    geo_lat={frontmatter.geo_lat}
                    geo_lon={frontmatter.geo_lon}
                />
            )}
        </Layout>
    );
});


TalksPageTemplate.displayName = 'TalksPageTemplate';

export default TalksPageTemplate;

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            timeToRead
            wordCount {
                words
            }
            frontmatter {
                slug
                date(formatString: "MMMM DD, YYYY")
                title
                description
                section
                tags
                geo_lat
                geo_lon
                manifests
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 600
                            quality: 80
                            transformOptions: { 
                                grayscale: false, 
                                fit: COVER, 
                                cropFocus: CENTER 
                            }
                        )
                    }
                }
                background {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 1200
                            quality: 90
                            transformOptions: { 
                                grayscale: false, 
                                fit: COVER, 
                                cropFocus: CENTER 
                            }
                        )
                    }
                }
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Seo 
            title={frontmatter.title} 
            featured={frontmatter.featuredImg} 
            description={frontmatter.description}
        />
    );
}
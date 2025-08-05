import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layouts/layout";
import { Container, Row } from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import Tags from "../components/elements/tag";
import Seo from "../components/structure/SEO";
import { formatReadingTime } from "../utils/helpers";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const PapersPageTemplate = ({ data: { markdownRemark }, pageContext }) => {
    const { frontmatter, timeToRead, html } = markdownRemark;
    const isSSR = typeof window === "undefined";
    const breadcrumb = pageContext?.breadcrumb;

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background} />
            <HeaderWithBreadcrumbs 
                        breadcrumbs={breadcrumb?.crumbs || []}  
                        title={frontmatter.title}  
                        authors={frontmatter.authors}
                        citation={frontmatter.citation}
                        readingTime={formatReadingTime(timeToRead)}
                        date={frontmatter.date} />
            <Container>
                <Row className="post-body text-break">
                    <div 
                        className="bg-white text-black p-4"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </Row>
            </Container>
             
            <Tags tags={frontmatter.tags} />
            
            {!isSSR && frontmatter.geo_lat && (
                <Map geo_lat={frontmatter.geo_lat} geo_lon={frontmatter.geo_lon} />
            )}

        </Layout>
    );
};

export default PapersPageTemplate;

export const pageQuery = graphql`
    fragment PaperImageData on File {
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

    query PapersPageQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            timeToRead
            frontmatter {
                slug
                title
                description
                date(formatString: "MMMM DD, YYYY")
                tags
                authors
                citation
                featuredImg {
                    ...PaperImageData
                }
                background {
                    ...PaperImageData
                }
                geo_lat
                geo_lon
            }
        }
    }
`;

export const Head = ({ data: { markdownRemark } }) => {
    const { frontmatter } = markdownRemark;
    return (
        <Seo 
            title={frontmatter.title} 
            featured={frontmatter.featuredImg} 
            description={frontmatter.description}
        />
    );
};
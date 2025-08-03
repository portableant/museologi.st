import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import Tags from "../components/elements/tag";
import Seo from "../components/structure/SEO";
import {formatReadingTime} from "../utils/helpers";

const BlogPageTemplate = React.memo(({data: {markdownRemark}}) => {
    const {frontmatter, timeToRead, html} = markdownRemark;
    const isSSR = typeof window === "undefined";

    // Memoize computed values
    const formattedReadingTime = React.useMemo(() => formatReadingTime(timeToRead), [timeToRead]);
    const hasGeoLocation = React.useMemo(() => 
        frontmatter.geo_lat && frontmatter.geo_lon, 
        [frontmatter.geo_lat, frontmatter.geo_lon]
    );

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>
            <Container>
                <Row className="post-body">
                    <header className="px-4">
                        <h1 className="text-primary fw-bold mt-4">{frontmatter.title}</h1>
                        <div className="text-primary small mb-2">
                            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
                        </div>
                        <div className="text-primary lead small">{formattedReadingTime}</div>
                    </header>
                    <article 
                        className="bg-white text-black p-4"
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                </Row>
            </Container>
            
            {frontmatter.tags && <Tags tags={frontmatter.tags} />}
            
            {!isSSR && hasGeoLocation && (
                <Map 
                    geo_lat={frontmatter.geo_lat} 
                    geo_lon={frontmatter.geo_lon}
                />
            )}
        </Layout>
    );
});

BlogPageTemplate.displayName = 'BlogPageTemplate';

export default BlogPageTemplate;

export const pageQuery = graphql`
    query BlogPageQuery($id: String!) {
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
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
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
                            placeholder: BLURRED
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

export const Head = ({data: {markdownRemark}}) => {
    const {frontmatter} = markdownRemark;
    return (
        <Seo 
            title={frontmatter.title} 
            featured={frontmatter.featuredImg} 
            description={frontmatter.description}
        />
    );
};
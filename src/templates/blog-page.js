import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import Tags from "../components/elements/tag";
import Seo from "../components/structure/SEO";
import {formatReadingTime} from "../utils/helpers";

export default function BlogPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, timeToRead, html} = markdownRemark;
    const isSSR = typeof window === "undefined";
    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>
            <Container>
                <Row className={"post-body"}>
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                        <h2 className="text-primary small">{frontmatter.date}</h2>
                        <h3 className="text-primary lead small">{`${formatReadingTime(timeToRead)}`}</h3>
                    </div>
                    <div className="post-body bg-white text-black p-4"
                         dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>
            <Tags tags={frontmatter.tags} />
            {!isSSR && frontmatter.geo_lat && (
                <Map geo_lat={frontmatter.geo_lat} geo_lon={frontmatter.geo_lon}/>
            )}
        </Layout>
    );
}


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
                featuredImg{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 600
                            quality: 80
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
                background{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 1200
                            quality: 90
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
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
        <Seo title={frontmatter.title} featured={frontmatter.featuredImg} description={frontmatter.description}/>
    )
}

import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Badge, Col, Container, Row} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";

export default function BlogPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, timeToRead, html} = markdownRemark;
    const isSSR = typeof window === "undefined";
    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>
            <Container>
                <Row>
            <div className="px-4">
                <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                <h2 className="text-black lead">{frontmatter.date}</h2>
                <h3 className="text-black lead">Suggested reading time: {timeToRead} minute</h3>
            </div>
            <div className="post-body bg-white text-black p-4"
                 dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>
            <Container fluid className={"bg-pastel"}>
                <Container>
                    <Row>
                        {frontmatter.tags && <Col md={12} className="px-4 mb-2">
                            {frontmatter.tags.map((item, i) => (
                                <Badge className="bg-dark mx-1 my-1 p-2" key={i}>
                                    {item}
                                </Badge>
                            ))}
                        </Col>}
                    </Row>
                </Container>
            </Container>
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
                section
                tags
                geo_lat
                geo_lon
                background{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP, AVIF]
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
        <title>{frontmatter.title}</title>
    )
}
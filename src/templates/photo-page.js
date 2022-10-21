import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export default function PhotographsPageTemplate({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Layout>
            <Container>
                <Row>
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                        <h2 className="text-black lead">{frontmatter.date}</h2>
                    </div>
                    <div className="post-body bg-white text-black p-4 text-center">
                        <GatsbyImage className="mx-auto" image={ getImage(frontmatter.featuredImg) } alt={frontmatter.featuredImgAlt}/>
                    </div>
                </Row>
            </Container>
        </Layout>
    );
}


export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                featuredImgAlt
                featuredImg{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 1000
                            formats: [AUTO, WEBP, AVIF]
                            width: 1000
                            quality: 90
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
                date(formatString: "MMMM DD, YYYY")
                title
                section
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
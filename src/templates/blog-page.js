import {graphql} from "gatsby";
import * as React from "react";
import Layout  from "../components/layout";
import {Container, Row} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
export default function BlogPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>
            <Container>
                <Row>
            <div className="px-4">
                <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                <h2 className="text-black lead">{frontmatter.date}</h2>
            </div>
            <div className="post-body bg-white text-black p-4"
                 dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>
        </Layout>
    );
}


export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            frontmatter {
                slug
                date(formatString: "MMMM DD, YYYY")
                title
                section
                tags
                background{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [WEBP]
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
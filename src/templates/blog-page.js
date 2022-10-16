import {graphql} from "gatsby";
import * as React from "react";
import Layout  from "../components/layout";
import {Container, Row} from "react-bootstrap";

export default function BlogPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    return (
        <Layout>
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
import * as React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';

const BlogPage = ({data: {allMarkdownRemark: {edges},},}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="ml-4 mt-4">Sporadic blog posts</h1>
                    <Row>
                        {Posts}
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
}
export default BlogPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {section: {eq: "blog"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    frontmatter {
                        github_repo{
                            name
                            url
                        }
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        featuredImg {
                            childImageSharp {
                                id
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [AUTO, WEBP, AVIF]
                                    width: 600
                                    quality: 90
                                    transformOptions: { grayscale: false,fit: COVER, cropFocus: CENTER }
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`
export const Head = () => <title>Blog posts</title>

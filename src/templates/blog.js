import * as React from "react"
import Layout from "../components/layouts/layout"
import PostLink from "../components/structure/post-link";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import {SEO} from "../components/structure/seo";

const BlogPage = (props) => {
    const Posts = props.data.allMarkdownRemark.edges
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
            <Container fluid className={"mx-auto text-center bg-pastel"}>
                <Pagination pageContext={props.pageContext} />
            </Container>
        </Layout>
    );
}
export default BlogPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(filter: {frontmatter: {
            section: {eq: "blog"}}
            }, 
            sort: { order: DESC, fields: [frontmatter___date] },
            limit: $limit
            skip: $skip
            ) {
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
                                    placeholder: TRACED_SVG
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

export const Head = () => (
    <SEO title={"Blog and news"} description={"A sporadically populated blog; news, stories, tips"} />
)
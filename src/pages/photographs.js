import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card"
import { graphql } from "gatsby"
import { Row, Container } from 'react-bootstrap'
import Seo from "../components/structure/SEO"

const PhotographsPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    // Use useMemo to prevent unnecessary re-computation
    const posts = React.useMemo(() => 
        edges
            .filter(edge => edge.node.frontmatter?.date) // More robust null checking
            .map(edge => (
                <PostCard 
                    key={edge.node.id} 
                    post={edge.node}
                />
            )), [edges]
    )

    return (
        <Layout>
            <Container>
                <Row>
                    <div className="col-12">
                        <h1 className="fw-bold text-primary mt-4">Random Photographs</h1>
                    </div>
                </Row>
                <Row>
                    {posts}
                </Row>
            </Container>
        </Layout>
    )
}

export default PhotographsPage

export const pageQuery = graphql`
    query PhotographsQuery {
        allMarkdownRemark(
            filter: { frontmatter: { section: { eq: "image" } } }
            sort: { frontmatter: { date: DESC } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        featuredImg {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    width: 600
                                    formats: [AUTO, WEBP]
                                    quality: 80
                                    transformOptions: { 
                                        grayscale: false
                                        fit: COVER
                                        cropFocus: CENTER
                                    }
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
    <Seo 
        title="Random Photographs" 
        description="A collection of photographs I like"
    />
)
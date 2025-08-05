/**
 * PhotographsPage component displays a collection of photograph posts.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data returned from GraphQL query.
 * @param {Object} props.data.allMarkdownRemark - Markdown remark data.
 * @param {Array} props.data.allMarkdownRemark.edges - Array of post edges.
 * @param {Object} props.pageContext - Context for the page, including breadcrumbs.
 * @param {Object} props.pageContext.breadcrumb - Breadcrumb navigation data.
 * @returns {JSX.Element} The rendered photographs page.
 */

/**
 * GraphQL query to fetch photograph posts.
 *
 * @typedef {Object} PhotographsQuery
 * @property {Object} allMarkdownRemark - Markdown remark data.
 * @property {Array} allMarkdownRemark.edges - Array of post edges.
 * @property {Object} allMarkdownRemark.edges.node - Individual post node.
 * @property {string} allMarkdownRemark.edges.node.id - Unique post ID.
 * @property {Object} allMarkdownRemark.edges.node.frontmatter - Post frontmatter.
 * @property {string} allMarkdownRemark.edges.node.frontmatter.date - Post date.
 * @property {string} allMarkdownRemark.edges.node.frontmatter.slug - Post slug.
 * @property {string} allMarkdownRemark.edges.node.frontmatter.title - Post title.
 * @property {Object} allMarkdownRemark.edges.node.frontmatter.featuredImg - Featured image data.
 */

/**
 * Head component for SEO metadata.
 *
 * @returns {JSX.Element} SEO metadata for the photographs page.
 */
import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card"
import { graphql } from "gatsby"
import { Row, Container } from 'react-bootstrap'
import Seo from "../components/structure/SEO"
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs"

const PhotographsPage = ({ data: { allMarkdownRemark: { edges } }, pageContext }) => {
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

    const { breadcrumb } = pageContext

    return (
        <Layout>
            <HeaderWithBreadcrumbs
                breadcrumbs={breadcrumb?.crumbs || []}
                title="Random Photographs"
                date={null}
            />
            <Container>
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
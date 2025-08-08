import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layouts/layout"
import {Link, graphql} from "gatsby"
import PostCard from "../components/structure/post-card"
import {Container, Row, Col} from "react-bootstrap"
import {startCase} from "lodash"
import Seo from "../components/structure/SEO"
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs"

const Tags = ({pageContext, data}) => {
    const {tag} = pageContext
    const {edges, totalCount} = data.allMarkdownRemark
    const breadcrumb = pageContext?.breadcrumb
    
    // Create the tag header string
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${startCase(tag)}"`

    return (
        <Layout>
            <HeaderWithBreadcrumbs
                breadcrumbs={breadcrumb?.crumbs || []}
                title={tagHeader}
                date={null}
            />
            <Container>
                <Row>
                    {edges.map(({node}) => (
                        <PostCard key={node.id} post={node} />
                    ))}
                </Row>
                <Row>
                    <Col md={4}>
                        <Link className="my-3 btn-dark btn text-white" to="/tags">
                            All tags
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
        breadcrumb: PropTypes.object,
    }).isRequired,
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            slug: PropTypes.string.isRequired,
                            date: PropTypes.string,
                            featuredImg: PropTypes.object,
                        }).isRequired,
                    }).isRequired,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: {frontmatter: {date: DESC}}
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        featuredImg {
                            ...FeaturedImage
                        }
                    }
                }
            }
        }
    }
`;

export const Head = ({pageContext}) => (
    <Seo 
        title={`Pages tagged with "${startCase(pageContext.tag)}"`}
        description={`Browse all content tagged with ${startCase(pageContext.tag)}`}
    />
)
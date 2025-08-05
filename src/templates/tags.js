import * as React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layouts/layout";
// Components
import {Link, graphql} from "gatsby"
import PostCard from "../components/structure/post-card";
import {Container, Row, Col} from "react-bootstrap";
// Utilities
import {startCase} from "lodash"
import Seo from "../components/structure/SEO";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const Tags = React.memo(({pageContext, data}) => {
    const {tag} = pageContext
    const {edges, totalCount} = data.allMarkdownRemark
    const breadcrumb = pageContext?.breadcrumb
    // Ensure tag is always a string
    // Memoize the tag header to avoid recalculation
    const tagHeader = React.useMemo(() => 
        `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${startCase(tag)}"`,
        [totalCount, tag]
    );

    // Memoize the posts to prevent unnecessary re-renders
    const posts = React.useMemo(() => 
        edges.map(({node}) => <PostCard key={node.id} post={node}/>),
        [edges]
    );

    return (
        <Layout>
            <HeaderWithBreadcrumbs
                    breadcrumbs={breadcrumb?.crumbs || []}
                    title={tagHeader}
                    date={null}
                />
            <Container>
                <Row>
                    {posts}
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
});

// Add display name for debugging
Tags.displayName = 'Tags';

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
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
                            featuredImg: PropTypes.object,
                        }).isRequired,
                    }).isRequired,
                }).isRequired
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
                            childImageSharp {
                                id
                                gatsbyImageData(
                                    placeholder: DOMINANT_COLOR
                                    height: 600
                                    formats: [AUTO, WEBP]
                                    width: 600
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

export const Head = ({pageContext}) => (
    <Seo 
        title={`Pages tagged with "${startCase(pageContext.tag)}"`}
        description={`Browse all content tagged with ${startCase(pageContext.tag)}`}
    />
)
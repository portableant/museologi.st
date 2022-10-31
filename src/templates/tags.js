import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layouts/layout";
// Components
import {Link, graphql} from "gatsby"
import PostLink from "../components/structure/post-link";
import {Container, Row, Button, Col} from "react-bootstrap";
// Utilities
import {startCase} from "lodash"
import Seo from "../components/structure/SEO";

const Tags = ({pageContext, data}) => {
    const {tag} = pageContext
    const {edges, totalCount} = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with "${startCase(tag)}"`

    return (
        <Layout>
            <Container>
                <Row>
                <h1 className="ml-4 mt-4">{tagHeader}</h1>
                <Row>
                    {edges.map(({node}) => {
                        return (
                            <PostLink key={node.id} post={node}/>
                        )
                    })}
                </Row>
                    <Col md={4}><Button className="my-3 btn-dark"><Link to="/tags">All tags</Link></Button></Col>
                </Row>
            </Container>
        </Layout>
    )

}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            slug: PropTypes.string.isRequired,

                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
          totalCount
    edges {
      node {
        frontmatter {
          title
          slug
          featuredImg {
            childImageSharp {
              id
              gatsbyImageData(
                placeholder: BLURRED
                height: 600
                formats: [AUTO, WEBP, AVIF]
                width: 600
                quality: 90
                transformOptions: {grayscale: false, fit: COVER, cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
  }
}
`
export function Head({pageContext}) {
    return (
        <Seo title={"Pages tagged with " + pageContext.tag} />
    )
}
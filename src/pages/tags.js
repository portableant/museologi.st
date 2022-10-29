import React from "react"
import PropTypes from "prop-types"
import {SEO} from "../components/structure/seo";

// Utilities
import {kebabCase, startCase} from "lodash"

// Components
import { Link, graphql } from "gatsby"
import Layout  from "../components/layouts/layout"
import {Container,Row} from "react-bootstrap"

const TagsPage = ({
                      data: {
                          allMarkdownRemark: { group },
                          site: {
                              siteMetadata: { title },
                          },
                      },
                  }) => (
    <Layout>
        <Container>
            <Row className={"post-body"}>
            <h1 className="ml-4 mt-4">Tags</h1>
            <ul className="list-group-flush row">
                {group.map(tag => (
                    <li key={tag.fieldValue} className="list-item col-md-4 border-top py-2 d-flex justify-content-between align-items-start">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {startCase(tag.fieldValue)}
                        </Link>
                        <span className="badge bg-dark">{tag.totalCount}</span>
                    </li>
                ))}
            </ul>
            </Row>
        </Container>
    </Layout>
)

TagsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export const Head = () => (
    <SEO title={"An index of tags used on this site"} description={"An indexed view of tags used on this site, with counts"}/>
)
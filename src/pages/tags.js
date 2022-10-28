import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
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
    <div>
        <Helmet title={title} />
    <Layout>
        <Container>
            <Row >
            <h1 className="ml-4 mt-4">Tags</h1>
            <ul className="list-unstyled row">
                {group.map(tag => (
                    <li key={tag.fieldValue} className="list-item col-4 border-top py-2">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
            </Row>
        </Container>
    </Layout>
    </div>
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
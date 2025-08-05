import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { kebabCase, startCase } from "lodash"
import Layout from "../components/layouts/layout"
import Seo from "../components/structure/SEO"
import { Container, Row } from "react-bootstrap"
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs"

const TagsPage = ({ data, pageContext }) => {
  const { group } = data.allMarkdownRemark
  const breadcrumbs =  pageContext.breadcrumb?.crumbs || []

  return (
    <Layout>
      <HeaderWithBreadcrumbs breadcrumbs={breadcrumbs || []} title={'Tags'} />
      <Container>
        <Row className="post-body">
          <ul className="list-group-flush row">
            {group.map(tag => (
              <li 
                key={tag.fieldValue} 
                className="list-item col-md-4 border-top py-2 d-flex justify-content-between align-items-start"
              >
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
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`

export const Head = () => (
  <Seo 
    title="An index of tags used on this site" 
    description="An indexed view of tags used on this site, with counts"
  />
)
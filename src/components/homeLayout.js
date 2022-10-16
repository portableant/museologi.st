/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import Footer from "../components/footer"
import Helmet from 'react-helmet'

const HomeLayout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
                name
                link
                id
            }
          }
        }
      }
    `}
        render={data => (
            <>
                <Helmet></Helmet>
                    <main>
                        {children}
                    </main>
                <Footer/>
            </>
        )}
    />
)

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HomeLayout

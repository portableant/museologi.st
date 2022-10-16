import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import NavBar from "../components/nav";
import Footer from "../components/footer"

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
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
                <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title}/>
                <main>
                    {children}
                </main>
                <Footer/>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

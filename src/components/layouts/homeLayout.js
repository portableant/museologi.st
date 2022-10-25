/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import Footer from "../structure/footer"
import Helmet from 'react-helmet'
import BackToTop from "react-back-to-top";
import CookieConsent from '../services/cookieconsent';

const HomeLayout = ({children}) => (
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
            aboutLinks {
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
                <Footer aboutLinks={data.site.siteMetadata.aboutLinks}/>
                <BackToTop
                    mainStyle={{
                        width: '100%',
                        height: '100%',
                        background: 'url(...)',
                        backgroundColor: 'blue'
                    }}
                    percentStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    animate='rotate'
                    offsetTop={20}
                    step={50}
                    percent={true}
                    visiblePercent={40}
                />
                <CookieConsent/>
            </>
        )}
    />
)

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HomeLayout

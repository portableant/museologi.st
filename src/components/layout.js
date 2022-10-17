import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import NavBar from "../components/nav";
import Footer from "../components/footer"
import BackToTop from 'react-back-to-top';
import CookieConsent from '../components/cookieconsent';

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
                <BackToTop
                    mainStyle={{
                        width:'100%',
                        height:'100%',
                        background:'url(...)'
                    }}
                    percentStyle={{
                        width:'100%',
                        height:'100%',
                    }}
                    animate='rotate'
                    offsetTop={20}
                    step={50}
                    percent={true}
                    visiblePercent={50}
                />
                <CookieConsent/>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import NavBar from "../structure/nav";
import Footer from "../structure/footer"
import BackToTop from 'react-back-to-top';
import CookieConsent from '../services/cookieconsent';
import Effects from "../structure/effects";

export default function Layout({children}) {
    const data = useStaticQuery(graphql`
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
    `)
        return (
            <>
                <NavBar menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title}/>
                <main>
                    {children}
                </main>
                <Footer aboutLinks={data.site.siteMetadata.aboutLinks}/>
                <BackToTop
                    mainStyle={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#192036',
                        color: 'white'
                    }}
                    percentStyle={{
                        width: '100%',
                        height: '100%',
                        display: 'none'
                    }}
                    animate='rotate'
                    offsetTop={20}
                    step={50}
                    percent={false}
                    visiblePercent={50}
                />
                <CookieConsent/>
                <Effects/>
            </>
        )

}


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}


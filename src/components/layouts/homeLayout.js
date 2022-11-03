import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import Footer from "../structure/footer"
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
            </>
        )}
    />
)

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HomeLayout

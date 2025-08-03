import { graphql, useStaticQuery } from "gatsby"

const SITE_METADATA_QUERY = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
        twitterHandle
        image
        siteUrl
      }
    }
  }
`

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(SITE_METADATA_QUERY)
  return site.siteMetadata
}
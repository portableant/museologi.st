import { graphql } from "gatsby";

export const fragments = graphql`
  fragment ImageSharpData on ImageSharp {
    gatsbyImageData(
      placeholder: DOMINANT_COLOR
      height: 600
      formats: [AUTO, WEBP]
      width: 1200
      quality: 90
      transformOptions: { 
        grayscale: false, 
        fit: COVER, 
        cropFocus: CENTER 
      }
    )
  }

  fragment FeaturedImageData on ImageSharp {
    gatsbyImageData(
      placeholder: DOMINANT_COLOR
      height: 600
      formats: [AUTO, WEBP]
      width: 600
      quality: 80
      transformOptions: { 
        grayscale: false, 
        fit: COVER, 
        cropFocus: CENTER 
      }
    )
  }

  fragment MarkdownContent on MarkdownRemark {
    html
    id
    timeToRead
    wordCount {
      words
    }
    frontmatter {
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      description
      section
      tags
      geo_lat
      geo_lon
      zenodo_doi
      project_website
      deposited_archive {
        url
        title
      }
      github_repo {
        url
        name
      }
      background {
        childImageSharp {
          ...ImageSharpData
        }
      }
      featuredImg {
        childImageSharp {
          ...FeaturedImageData
        }
      }
    }
  }
`;

export const imageSharpFluidFragment = graphql`
    fragment ImageSharpFluid on File {
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                height: 600
                formats: [AUTO, WEBP]
                width: 600
                quality: 80
                transformOptions: { 
                    grayscale: false, 
                    fit: COVER, 
                    cropFocus: CENTER 
                }
            )
        }
    }
`;


export const imageSharpHighResFragment = graphql`
    fragment ImageSharpHighRes on File {
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED
                height: 600
                formats: [AUTO, WEBP]
                width: 600
                quality: 80
                transformOptions: { 
                    grayscale: false, 
                    fit: COVER, 
                    cropFocus: CENTER 
                }
            )
        }
    }
`;
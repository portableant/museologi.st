/**
 * GraphQL fragments for Gatsby image and markdown data.
 *
 * @module fragments
 *
 * @description
 * This module defines reusable GraphQL fragments for querying image data and markdown content
 * in a Gatsby project. These fragments can be imported and used in page and component queries
 * to ensure consistent data structures and reduce code duplication.
 *
 * @fragment ImageSharpData
 * Retrieves optimized image data from ImageSharp nodes with specific transformation options.
 *
 * @fragment FeaturedImageData
 * Retrieves featured image data from ImageSharp nodes, optimized for display as featured images.
 *
 * @fragment MarkdownContent
 * Retrieves HTML content, metadata, and associated images from MarkdownRemark nodes.
 *
 * @fragment ImageSharpFluid
 * Retrieves fluid image data from File nodes via childImageSharp, suitable for responsive images.
 *
 * @fragment ImageSharpHighRes
 * Retrieves high-resolution image data from File nodes via childImageSharp, optimized for quality.
 */
// Import the graphql tag from Gatsby for defining fragments
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
    }
`;


export const imageSharpHighResFragment = graphql`
    fragment ImageSharpHighRes on File {
        childImageSharp {
            gatsbyImageData(
                placeholder: DOMINANT_COLOR
                height: 600
                formats: [AUTO, WEBP]
                width: 600
                quality: 100
                transformOptions: { 
                    grayscale: false, 
                    fit: COVER, 
                    cropFocus: CENTER 
                }
            )
        }
    }
`;
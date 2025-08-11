/**
 * GraphQL fragments for Gatsby image and markdown data.
 *
 * @module commonFragments
 *
 * @description
 * This module exports reusable GraphQL fragments for querying image and markdown data in a Gatsby project.
 *
 * Fragments:
 * - ImageSharpData: General image data from ImageSharp nodes.
 * - FeaturedImageData: Featured image data from ImageSharp nodes for highlighted images.
 * - PaperListItem: Metadata for paper list items from MarkdownRemark nodes, including featured image.
 * - MarkdownContent: Full markdown content and metadata, including background and featured images.
 * - FeaturedImageDataPhotos: High-res photo data from File nodes for photo galleries.
 * - PhotoFrontmatter: Photo metadata and featured image from MarkdownRemark nodes.
 * - PhotoDetails: Photo HTML content and metadata.
 * - ImageSharpFluid: Responsive fluid image data from File nodes.
 * - ImageSharpHighRes: High-quality image data from File nodes.
 * - FrontmatterFields: Basic frontmatter fields from MarkdownRemark nodes.
 * - FeaturedImage: Featured image data from File nodes.
 * - TalksFrontmatterFragment: Metadata and images for talks from MarkdownRemark nodes.
 * - BlogFrontmatterFragment: Metadata and images for blog posts from MarkdownRemark nodes.
 * - ProjectCardFeaturedImgFragment: Duotone-styled featured image for project cards.
 * - ProjectCardFrontmatterFragment: Project card metadata and featured image.
 */
 // Import the graphql tag from Gatsby for defining fragments
import { graphql } from "gatsby";

export const imageSharpDataFragment = graphql`
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
`;

export const featuredImageDataFragment = graphql`
  fragment FeaturedImageData on ImageSharp {
    gatsbyImageData(
      placeholder: DOMINANT_COLOR
      height: 400
      formats: [AUTO, WEBP]
      width: 400
      quality: 90
      transformOptions: { 
        grayscale: false, 
        fit: COVER, 
        cropFocus: CENTER 
      }
    )
  }
`;

export const paperListItemFragment = graphql`
  fragment PaperListItem on MarkdownRemark {
    id
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      featuredImg {
        ...ImageSharpFluid
      }
    }
  }
`;

export const markdownContentFragment = graphql`
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

export const featuredImageDataPhotosFragment = graphql`
  fragment FeaturedImageDataPhotos on File {
    publicURL
    childImageSharp {
      gatsbyImageData(
        placeholder: DOMINANT_COLOR
        height: 1000
        formats: [AUTO, WEBP]
        width: 1000
        quality: 80
        transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
      )
    }
  }
`;

export const photoFrontmatterFragment = graphql`
  fragment PhotoFrontmatter on MarkdownRemark {
    frontmatter {
      slug
      featuredImgAlt
      featuredImg {
        ...FeaturedImageDataPhotos
      }
      date(formatString: "MMMM DD, YYYY")
      title
      description
      section
      tags
      geo_lat
      geo_lon
    }
  }
`;

export const photoDetailsFragment = graphql`
  fragment PhotoDetails on MarkdownRemark {
    html
    ...PhotoFrontmatter
  }
`;

export const imageSharpFluidFragment = graphql`
  fragment ImageSharpFluid on File {
    childImageSharp {
      gatsbyImageData(
        placeholder: DOMINANT_COLOR
        height: 400
        formats: [AUTO, WEBP]
        width: 400
        quality: 90
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
        height: 400
        formats: [AUTO, WEBP]
        width: 400
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

export const frontmatterFields = graphql`
  fragment FrontmatterFields on MarkdownRemark {
    id
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
  }
`;

export const featuredImage = graphql`
  fragment FeaturedImage on File {
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

export const TalksFrontmatterFragment = graphql`
  fragment TalksFrontmatterFragment on MarkdownRemark {
    frontmatter {
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      description
      section
      tags
      geo_lat
      geo_lon
      manifests
      featuredImg {
        id
        absolutePath
        publicURL
        childImageSharp {
          ...FeaturedImageData
        }
      }
      background {
        id
        absolutePath
        publicURL
        childImageSharp {
          ...ImageSharpData
        }
      }
    }
  }
`;

export const BlogFrontmatterFragment = graphql`
  fragment BlogFrontmatterFragment on MarkdownRemark {
    frontmatter {
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      description
      section
      tags
      geo_lat
      geo_lon
      featuredImg {
        id
        absolutePath
        publicURL
        childImageSharp {
          ...FeaturedImageData
        }
      }
      background {
        id
        absolutePath
        publicURL
        childImageSharp {
          ...ImageSharpData
        }
      }
    }
  }
`;

// Fragment for featured image in project cards
export const ProjectCardFeaturedImgFragment = graphql`
  fragment ProjectCardFeaturedImgFragment on ImageSharp {
    id
    gatsbyImageData(
      placeholder: DOMINANT_COLOR
      height: 600
      formats: [AUTO, WEBP]
      width: 600
      quality: 90
      transformOptions: {
        fit: COVER
        cropFocus: CENTER
        duotone: {
          highlight: "#77a6a0"
          shadow: "#000000"
          opacity: 60
        }
      }
      webpOptions: { quality: 90 }
    )
  }
`;

// Fragment for frontmatter fields in project cards
export const ProjectCardFrontmatterFragment = graphql`
  fragment ProjectCardFrontmatterFragment on MarkdownRemark {
    frontmatter {
    slug
    title
    date(formatString: "MMMM DD, YYYY")
    featuredImg {
      childImageSharp {
        ...ProjectCardFeaturedImgFragment
      }
    }
}
  }
`;
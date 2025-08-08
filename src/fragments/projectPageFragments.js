import { graphql } from "gatsby";

export const ProjectFrontmatterFragment = graphql`
    fragment ProjectFrontmatterFragment on MarkdownRemark {
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            section
            title
            description
            role
            partners
            collaborators
            institution
            publications
            geo_lat
            geo_lon
            news {
                ...NewsFragment
            }
            background {
                id
                absolutePath
                publicURL
                childImageSharp {
                    ...ImageSharpData
                }
            }
            project_website
            slug
            vimeo
            zenodo_doi
            github_repo {
                ...GithubFragment
            }
            type
            grant_number
            grant_amount
            funders
            tags
            deposited_archive {
                ...DepositedArchiveFragment
            }
            documents {
                ...DocumentsFragment
            }
            audio {
                ...AudioFragment
            }
            featuredImg {
                 id
                 absolutePath
                 publicURL
                 childImageSharp {
                    ...FeaturedImageData
                }
            }
            images {
                caption
                image {
                    id
                    ...ImageSharpHighRes
                }
            }
        }
    }
`;

export const NewsFragment = graphql`
  fragment NewsFragment on MarkdownRemarkFrontmatterNews {
    title
    url
    medium
  }
`;

export const GithubFragment = graphql`
    fragment GithubFragment on MarkdownRemarkFrontmatterGithub_repo {
    url
    name
}`;
// Documents fragment
export const DocumentsFragment = graphql`
  fragment DocumentsFragment on MarkdownRemarkFrontmatterDocuments {
    title
    type
    location
  }
`;

// Audio fragment
export const AudioFragment = graphql`
  fragment AudioFragment on MarkdownRemarkFrontmatterAudio {
    title
    type
    location
    author
    project
  }
`;

// Deposited archive fragment
export const DepositedArchiveFragment = graphql`
  fragment DepositedArchiveFragment on MarkdownRemarkFrontmatterDeposited_archive {
    title
    url
    doi
    holder
  }
`;
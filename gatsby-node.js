const _ = require("lodash")
const fs = require("fs");
const {paginate} = require("gatsby-awesome-pagination");

// Ensure that the required directories exist
// exports.onPreBootstrap = ({reporter}) => {
//     const requiredPaths = ["about-me", "blog", "drafts", "images", "photogrammetry", "photographs", "static", "projects"];
//     requiredPaths.forEach(path => {
//         if (!fs.existsSync(path)) {
//             reporter.info(`creating directory ${path}...`);
//             fs.mkdirSync(path);
//         }
//     });
// };

// Set up schemas
exports.createSchemaCustomization = ({actions}) => {
    const {createTypes} = actions;

    const typeDefs = `
    type SiteSiteMetadata implements Node {
      title: String!
      description: String
      author: String
      siteUrl: String
      twitterHandle: String
    }
  `;

    createTypes(typeDefs);
}

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;

    // if the node is of type MarkdownRemark...
    if (node.internal.type === `MarkdownRemark`) {
        // get the parent directory
        const parent = getNode(node.parent);
        let collection = parent.sourceInstanceName;

        // add the collection field
        createNodeField({
            node,
            name: 'collection',
            value: collection,
        });
    }
};

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const blogPostTemplate = require.resolve(`./src/templates/blog-page.js`)
    const projectsTemplate = require.resolve(`./src/templates/projects-page.js`)
    const photographyTemplate = require.resolve(`./src/templates/photo-page.js`)
    const photogrammetryTemplate = require.resolve(`./src/templates/photogrammetry-page.js`)
    const talksTemplate = require.resolve(`./src/templates/talks-page.js`)
    const papersTemplate = require.resolve(`./src/templates/papers-page.js`) 
       
    return graphql(`
     {
      blogPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "blog"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }
      projectsPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "projects"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }
      photogrammetryPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "3d"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }
      photographyPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "image"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }
      aboutPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "about-me"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }

      talksPosts: allMarkdownRemark(
      filter: {frontmatter: {section: {eq: "talks"}}}
      sort: {frontmatter: {date: DESC}}
      limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }
        papersPosts: allMarkdownRemark(
      filter: {frontmatter: {section: {eq: "papers"}}}
      sort: {frontmatter: {date: DESC}}
      limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              date
              slug
              background {
                id
              }
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: {frontmatter: {tags: SELECT}}) {
          fieldValue
        }
      }
    }

  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        result.data.blogPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.projectsPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: projectsTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.photogrammetryPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: photogrammetryTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.photographyPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: photographyTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.talksPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: talksTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.papersPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: papersTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.aboutPosts.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        const tags = result.data.tagsGroup.group
        const tagTemplate = require.resolve("./src/templates/tags.js")

        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                component: tagTemplate,
                context: {
                    tag: tag.fieldValue,
                },
            })
        });

        const {paginate} = require('gatsby-awesome-pagination')

        const blogPostPagedTemplate = require.resolve(`./src/templates/blog.js`)
        paginate({
            createPage: createPage,
            component: blogPostPagedTemplate,
            items: result.data.blogPosts.edges,
            itemsPerPage: 12,
            itemsPerFirstPage: 12,
            pathPrefix: '/blog'
        })
        const talksPostPagedTemplate = require.resolve(`./src/templates/talk.js`)
        paginate({
            createPage: createPage,
            component: talksPostPagedTemplate,
            items: result.data.talksPosts.edges,
            itemsPerPage: 12,
            itemsPerFirstPage: 12,
            pathPrefix: '/talks'
        })

        const papersPostPagedTemplate = require.resolve(`./src/templates/papers.js`)
        paginate({
            createPage: createPage,
            component: papersPostPagedTemplate,
            items: result.data.papersPosts.edges,
            itemsPerPage: 12,
            itemsPerFirstPage: 12,
            pathPrefix: '/papers'
        })

        const photogrammetryPagedTemplate = require.resolve(`./src/templates/photogrammetry.js`)
        paginate({
            createPage: createPage,
            component: photogrammetryPagedTemplate,
            items: result.data.photogrammetryPosts.edges,
            itemsPerPage: 12,
            itemsPerFirstPage: 12,
            pathPrefix: '/photogrammetry'
        })

        const projectsPostPagedTemplate = require.resolve(`./src/templates/projects.js`)
        paginate({
            createPage: createPage,
            component: projectsPostPagedTemplate,
            items: result.data.projectsPosts.edges,
            itemsPerPage: 12,
            itemsPerFirstPage: 12,
            pathPrefix: '/projects'
        })
    });
}

exports.createSchemaCustomization = ({actions}) => {
    const {createTypes} = actions

    createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }
    type Frontmatter {
      title: String!
      featuredImgUrl: String
      section: String
    }
  `)
}
exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /leaflet/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

const fs = require("fs");

// Ensure that the required directories exist
exports.onPreBootstrap = ({reporter}) => {
    const requiredPaths = ["about-me", "blog", "drafts", "images", "photogrammetry", "photographs", "static", "projects"];
    requiredPaths.forEach(path => {
        if (!fs.existsSync(path)) {
            reporter.info(`creating directory ${path}...`);
            fs.mkdirSync(path);
        }
    });
};

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

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/blog-page.js`)
    const projectsTemplate = require.resolve(`./src/templates/projects-page.js`)
    const photographyTemplate = require.resolve(`./src/templates/photo-page.js`)
    const photogrammetryTemplate = require.resolve(`./src/templates/photogrammetry-page.js`)
    return graphql(`
     {
      blogPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "blog"}}}
        sort: {order: DESC, fields: [frontmatter___date]}
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
      },
      projectsPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "projects"}}}
        sort: {order: DESC, fields: [frontmatter___date]}
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
      },
      photogrammetryPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "3d"}}}
        sort: {order: DESC, fields: [frontmatter___date]}
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
      },
      photographyPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "image"}}}
        sort: {order: DESC, fields: [frontmatter___date]}
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
      },
      aboutPosts: allMarkdownRemark(
        filter: {frontmatter: {section: {eq: "about-me"}}}
        sort: {order: DESC, fields: [frontmatter___date]}
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
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        result.data.blogPosts.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.projectsPosts.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: projectsTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.photogrammetryPosts.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: photogrammetryTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.photographyPosts.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: photographyTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        result.data.aboutPosts.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.frontmatter.slug,
                    id: node.id
                },
            });
        });
        const { paginate } = require('gatsby-awesome-pagination')

        const blogPostPagedTemplate = require.resolve(`./src/templates/blog.js`)
        // const postsPerPage = 18
        // const numPages = Math.ceil(result.data.blogPosts.edges.length / postsPerPage)
        // Array.from({ length: numPages }).forEach((_, i) => {
        //     createPage({
        //         path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        //         component: blogPostPagedTemplate,
        //         context: {
        //             limit: postsPerPage,
        //             skip: i * postsPerPage,
        //             numPages,
        //             currentPage: i + 1,
        //         },
        //     })
        // })

        paginate({
            createPage: createPage,
            component: blogPostPagedTemplate,
            items: result.data.blogPosts.edges,
            itemsPerPage: 18,
            itemsPerFirstPage: 18,
            pathPrefix: '/blog'
        })
    });
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

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
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
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
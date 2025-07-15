const siteUrl = process.env.URL || `https://museologi.st`
const path = require('path')

module.exports = {
    siteMetadata: {
        title: `Museologi.st`,
        siteUrl: `https://museologi.st`,
        author: `Daniel Pett`,
        description: 'A Gatsby powered website documenting Daniel Pett and his work',
        twitterHandle: '@dejpett',
        image: `/img.png`,
        og: {
            siteName: 'Museologi.st - Daniel Pett',
            twitterCreator: '@dejpett',
        },
        menuLinks: [

            {
                name: 'Blog',
                link: '/blog/',
                id: 1
            },
            {
                name: 'Projects',
                link: '/projects/',
                id: 2
            },
            {
                name: '3D Research',
                link: '/photogrammetry/',
                id: 3
            },
            {
                name: 'Talks',
                link: '/talks/',
                id: 4
            },
            {
                name: 'Papers',
                link: '/papers/',
                id: 5
            }
        ],
        aboutLinks: [
            {
                name: 'Biography',
                link: '/biography/',
                id: 1
            },
            {
                name: 'Photographs',
                link: '/photographs/',
                id: 2
            },
            {
                name: 'Publications',
                link: '/publications/',
                id: 3
            },
            {
                name: 'Grants awarded',
                link: '/grants/',
                id: 4
            }
        ],
        serviceLinks: [
            {
                name: '3D Technologies',
                link: '/consultancy/3d-scanning/',
                id: 1
            },
            {
                name: 'Consulting & Strategy',
                link: '/consultancy/strategy/',
                id: 2
            },
            {
                name: 'Web Development',
                link: '/consultancy/web-development/',
                id: 2
            },
            {
                name: 'Academic Research',
                link: '/consultancy/academic-research/',
                id: 2
            },
        ]
    },
    plugins: [
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                policy: [{userAgent: '*', allow: '/'}],
                output: "/robots.txt",
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: siteUrl,
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images\/.*\.svg/,
                    omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
                }
            }
        },
        {
            resolve: `gatsby-plugin-scroll-indicator`,
            options: {
                // Configure color of the scroll indicator
                color: "#fff",
                // Height of the scroll indicator
                height: "6px",
                // Configure paths where the scroll indicator will appear
                //paths: ["/projects/**", "/blog/**", "talks/**", "/photogrammetry/**", "/photographs/**", "/biography/**", "/publications/**", "/grants/**"],
                // Configure the z-index of the indicator element
                zIndex: `9999`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-M5H80B9MSP",
                ],
                pluginConfig: {
                    head: true
                },
            },
        },
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
           {
  site {
    siteMetadata {
      siteUrl
    }
  }
  allSitePage {
  nodes {
        path
        }
    }
  allMarkdownRemark {
    nodes {
        frontmatter {
          last_modified_at
          slug
      }
    }
  }
}
      `,
                resolvePages: ({
                                   allSitePage: { nodes: allPages },
                                   allMarkdownRemark: {nodes: allPosts},
                }) => {

                    const pathToDateMap = {};

                    allPosts.map(post => {
                        pathToDateMap[post.frontmatter.slug] = { date: post.frontmatter.last_modified_at};
                    });

                    const pages = allPages.map(page => {
                        return {...page, ...pathToDateMap [page.path] };
                    });

                    return pages;
            }
                ,
                serialize: ({ path, date }) => {
                    console.log
                    let entry = {
                        url: path,
                        changefreq: 'daily',
                        priority: 0.5
                    };
                    if (date) {
                        entry.lastmod = date;
                        entry.priority = 0.7;
                    } else {
                        const w3cDate = new Date();
                        entry.lastmod = w3cDate.toISOString().replace(/T.*$/, '');
                    }
                    return entry;
                }
        },
            createLinkInHead: true,
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-mdx",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-mermaid`,
                    `gatsby-remark-emoji`,
                    {
                        resolve: `gatsby-remark-classes`,
                        options: {
                            classMap: {
                                "table": "table"
                            }
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 2000,
                            withWebp: true,
                            showCaptions: true,
                            quality: 90,
                            linkImagesToOriginal: false,
                            backgroundColor: `transparent`,
                            loading: `lazy`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images-remote`,
                        options: {
                            /**
                             * @param {'lazy' | 'eager' | 'auto'} loading
                             * Set the output markup's 'loading' attribute. Default: 'lazy'
                             */
                            loading: 'lazy',

                            /**
                             * @param {string} backgroundColor
                             * Background color. Default: '#fff'
                             */
                            backgroundColor: '#fff',

                            /**
                             * @param {boolean} linkImagesToOriginal
                             * If enabled, wraps the default markup with an <a> tag pointing to the original image.
                             * Default: false
                             */
                            linkImagesToOriginal: false,

                            /**
                             * @param {string | Function} wrapperStyle
                             * Inject styles to the image wrapper.
                             * Also accept a function that receives all image data as arguments, i.e
                             * ({ aspectRatio, width, height }) => `padding-bottom: ${height/2}px;`
                             * Alternatively you can also attach additional class to `.gria-image-wrapper`
                             */
                            wrapperStyle: 'padding-bottom: 0.5rem;',


                            /**
                             * ...imageOptions
                             * and any sharp image arguments (quality, maxWidth, etc.)
                             */
                            maxWidth: 1000,
                            quality: 90,
                        }
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: "carbon"
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: '>',
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/json`,
            },
            __key: 'logos'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`,
            },
            __key: "blog"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`,
            },
            __key: "projects"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `talks`,
                path: `${__dirname}/content/talks`,
            },
            __key: "talks"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `papers`,
                path: `${__dirname}/content/writing`,
            },
            __key: "papers"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `photogrammetry`,
                path: `${__dirname}/content/photogrammetry`,
            },
            __key: "photogrammetry"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `about`,
                path: `${__dirname}/content/about-me`,
            },
            __key: "about"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `photographs`,
                path: `${__dirname}/content/photographs`,
            },
            __key: "photographs"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/content/images`,
            },
            __key: "assets"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }]
};
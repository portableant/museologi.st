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
            { name: 'Blog', link: '/blog/', id: 1 },
            { name: 'Projects', link: '/projects/', id: 2 },
            { name: '3D Research', link: '/photogrammetry/', id: 3 },
            { name: 'Talks', link: '/talks/', id: 4 },
            { name: 'Papers', link: '/papers/', id: 5 }
        ],
        aboutLinks: [
            { name: 'Biography', link: '/biography/', id: 1 },
            { name: 'Photographs', link: '/photographs/', id: 2 },
            { name: 'Publications', link: '/publications/', id: 3 },
            { name: 'Grants awarded', link: '/grants/', id: 4 }
        ],
        serviceLinks: [
            { name: '3D Technologies', link: '/consultancy/3d-scanning/', id: 1 },
            { name: 'Consulting & Strategy', link: '/consultancy/strategy/', id: 2 },
            { name: 'Web Development', link: '/consultancy/web-development/', id: 2 },
            { name: 'Academic Research', link: '/consultancy/academic-research/', id: 2 }
        ],
        socialLinks: [
            {
                name: "facebook",
                url: "https://facebook.com/danielpett",
                label: "My facebook profile"
            },
            {
                name: "instagram",
                url: "https://instagram.com/danielejpett",
                label: "My Instagram profile"
            },
            {
                name: "twitter",
                url: "https://x.com/dejpett",
                label: "My twitter profile"
            },
            {
                name: "github",
                url: "https://github.com/portableant",
                label: "My GitHub account profile"
            },
            {
                name: "linkedin",
                url: "https://www.linkedin.com/in/danielpett/",
                label: "My Linkedin account profile"
            },
            {
                name: "orcid",
                url: "https://orcid.org/0000-0002-0246-2335",
                label: "My ORCID account profile"
            },
            {
                name: "google",
                url: "https://scholar.google.com/citations?user=39kTD8YAAAAJ&hl=en",
                label: "My Google Scholar account profile"
            },
            {
                name: "sketchfab",
                url: "https://sketchfab.com/danielpett",
                label: "My Sketchfab account profile"
            }
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
                develop: true,
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                ignore: [
                    'prismjs/',
                    'node_modules/react-back-to-top/dist/BackToTop.css',
                    'node_modules/leaflet/dist/leaflet.css',
                    'node_modules/vanilla-cookieconsent/dist/cookieconsent.css',
                    'static/plyr.css',
                ],
                purgeCSSOptions: {
                    safelist: [
                        'gatsby-remark-prismjs-copy-button',
                        'breadcrumb__list',
                        'blockquote',
                        'figcaption',
                        'lead',
                        'table',
                        'table-striped',
                        'table-bordered',
                        'table-hover',
                        'table-responsive',
                        'table-sm',
                        'table-dark',
                        'table-primary',
                        'table-secondary',
                        'table-success',
                        'table-danger', 
                        'table-border',
                        'thead',
                        'thead-dark',
                        'thead-light',
                        'tbody',
                        'tbody-dark',
                        'tbody-light',
                        'tr',
                        'th',
                        'td',
                        'carousel',
                        'carousel-inner',
                        'carousel-item',
                        'carousel-item-next',
                        'carousel-item-prev',
                        'carousel-item.active',
                        'carousel-fade',
                        'active',
                        'slide',
                        'carousel-control-prev',
                        'carousel-control-next',
                        'carousel-indicators',
                        'carousel-caption',
                        'data-bs-slide',
                        'data-bs-target',
                        'data-bs-slide-to',
                        // Keep base alert classes
                        'alert',
                        'alert-dismissible',
                        'alert-heading',
                        'alert-link',
                        'fade',
                        'show',
                        /^alert-/,
                        /^col-/,
                        /^row$/,
                        /^container(-fluid)?$/,
                        /^container$/,
                        /^card/,
                        /^navbar/,
                        /^badge/,
                        /^pagination/,
                        /^accordion/,
                        /^active$/,
                        /^disabled$/,
                        /^text-/,
                        /^bg-/,
                        /^d-/,
                        /^justify-/,
                        /^align-/,
                        /^m[trblxy]?-/,
                        /^p[trblxy]?-/,
                        /^g[trblxy]?-/,
                        /^order-/,
                        /^flex-/,
                        /^w-/,
                        /^h-/,
                        /^iframe-/, 
                        /^overflow-/,
                        /^position-/,
                        /^top-/,
                        /^bottom-/,
                        /^start-/,
                        /^end-/,
                        /^rounded/,
                        /^visually-hidden$/,
                        /^sr-only$/,
                        /^carousel-/,
                        /^ratio-*/,
                        /^table-/, 
                        /^border-/,
                    ],
                    greedy: [],
                    content: [
                        './src/**/*.{js,jsx,ts,tsx}', // Default for your components
                        './src/content/**/*.md',// Markdown files
                    ],
                    deep: [
                        /active/, // Matches active classes for indicators and items
                        /^alert-/, 
                        /^btn-/,
                        /carousel/, // Catch all for any carousel-related classes
                    ],
                    // Safelist CSS variables used by alerts
                    variables: [
                    /^--bs-alert-/,
                    ],
                },
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                policy: [{ userAgent: '*', allow: '/' }],
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
            resolve: "gatsby-plugin-svgr-svgo",
            options: {
                rule: {
                    include: /\.svg$/,
                    exclude: /node_modules/
                },
                inlineRequireUsageMarker: false,
                removeStyleElement: false,
                removeScriptElement: false,
                removeDimensions: true,
                convertColors: true,
                svgrOptions: {
                    plugins: [
                        "@svgr/plugin-jsx",
                        "@svgr/plugin-prettier"
                    ],
                    prettier: true,
                    prettierConfig: {
                        tabWidth: 2
                    },
                    svgo: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "preset-default",
                                params: {
                                    overrides: {
                                        removeViewBox: false,
                                        convertColors: {
                                            currentColor: true
                                        },
                                        removeDimensions: false,
                                        removeAttrs: {
                                            attrs: ["data-*"]
                                        }
                                    }
                                }
                            },
                            {
                                name: "addAttributesToSVGElement",
                                params: {
                                    attributes: [
                                        { focusable: "false" }
                                    ]
                                }
                            }
                        ]
                    },
                    ref: true,
                    titleProp: true,
                    descProp: true,
                    expandProps: "end",
                    dimensions: false
                }
            }
        },
        {
            resolve: `gatsby-plugin-scroll-indicator`,
            options: {
                color: "#fff",
                height: "6px",
                // paths: ["/projects/**", "/blog/**", "talks/**", "/photogrammetry/**", "/photographs/**", "/biography/**", "/publications/**", "/grants/**"],
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
                    allMarkdownRemark: { nodes: allPosts },
                }) => {
                    const pathToDateMap = {};

                    allPosts.map(post => {
                        pathToDateMap[post.frontmatter.slug] = { date: post.frontmatter.last_modified_at };
                    });

                    const pages = allPages.map(page => {
                        return { ...page, ...pathToDateMap[page.path] };
                    });

                    return pages;
                },
                serialize: ({ path, date }) => {
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
                    {
                        resolve: `gatsby-remark-embed-video`,
                        options: {
                            width: 800,
                            ratio: 1.77,
                            height: 400,
                            related: false,
                            noIframeBorder: true,
                            loadingStrategy: 'lazy',
                            urlOverrides: [
                                {
                                    id: 'youtube',
                                    embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                                },
                            ],
                            containerClass: 'ratio ratio-16x9',
                        },
                    },
                    {
                        resolve: `gatsby-remark-mermaid`,
                        options: {
                            mermaidConfig: {
                                theme: 'forest',
                                // themeCSS: '.node { font-size: 14px; }',
                                securityLevel: 'loose',
                            },
                        },
                    },
                    `gatsby-remark-emoji`,
                    {
                        resolve: `gatsby-remark-classes`,
                        options: {
                            classMap: {
                                "table": "table table-bordered border-primary table-striped table-responsive table-hover",
                            },
                            footnotes: true,
                            gfm: true
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
                            loading: 'lazy',
                            backgroundColor: '#fff',
                            linkImagesToOriginal: false,
                            wrapperStyle: 'padding-bottom: 0.5rem;',
                            maxWidth: 1000,
                            quality: 90,
                        }
                    },
                    `gatsby-remark-prismjs-copy-button`, // The copy button plugin first
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: "carbon",
                            editable: true
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: '>',
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
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
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
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
        },
        {
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
        }
    ]
};

module.exports = {
    siteMetadata: {
        title: `Museologi.st`,
        siteUrl: `https://www.museologi.st`,
        author: `Daniel Pett`,
        description: 'A Gatsby blog',
        twitterHandle: '@dejpett',
        menuLinks: [
            {
                name: 'Home',
                link: '/',
                id: 1
            },
            {
                name: 'Blog',
                link: '/blog',
                id: 2
            },
            {
                name: 'Projects',
                link: '/projects',
                id: 3
            },
            {
                name: '3D Research',
                link: '/photogrammetry',
                id: 4

            }
        ]
    },
    plugins: [{
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            "trackingId": "G-M5H80B9MSP"
        }
    },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
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
                            maxWidth: 800,
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
                    }
                ],
            },
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
                path: `${__dirname}/blog`,
            },
            __key: "blog"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/projects`,
            },
            __key: "projects"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `photogrammetry`,
                path: `${__dirname}/photogrammetry`,
            },
            __key: "photogrammetry"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `about`,
                path: `${__dirname}/about-me`,
            },
            __key: "about"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `photographs`,
                path: `${__dirname}/photographs`,
            },
            __key: "photographs"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/images`,
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
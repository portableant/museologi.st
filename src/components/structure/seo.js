import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function createSeoImage(featured, image) {
    if (featured) {
        return featured?.childImageSharp.gatsbyImageData.images.fallback.src;
    }
    return image;
}

export const SEO = ({ title, description, pathname, children, featured }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterHandle } = useSiteMetadata()

    const featuredImage = createSeoImage(featured,image);
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${featuredImage}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterHandle,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterHandle} />
            {children}
        </>
    )
}
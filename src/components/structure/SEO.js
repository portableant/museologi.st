import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function createSeoImage(featured, image) {
    if (featured) {
        return featured?.childImageSharp.gatsbyImageData.images.fallback.src;
    }
    return image;
}

const Seo = ({ title, description, pathname, children, featured }) => {
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
            <meta property="og:url" content={seo.url.toString()} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Museologi.st" />
            <meta property="og:description" content={seo.description} />
            <meta property="og:locale" content="en-gb" />
            <meta property="og:image" content={seo.image.toString()} />
            <meta property="og:image:alt" content="An image representing this post" />
            <meta property="og:image:width" content="600"/>
            <meta property="og:image:width" content="600" />
            <meta property="og:image:type" content="image/jpeg" />
            {children}
        </>
    )
}

export default Seo
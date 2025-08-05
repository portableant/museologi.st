import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const BackgroundImage = styled(GatsbyImage)`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  @media (max-width: 768px) {
    background-attachment: scroll; /* Fixed attachment can cause performance issues on mobile */
  }
`

export default function Hero() {
    const { file } = useStaticQuery(graphql`
        query BackgroundImageQuery {
            file(relativePath: { eq: "IMG_20190228_111545-01.jpeg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        quality: 90
                        backgroundColor: "black"
                        jpgOptions: { quality: 90 }
                        transformOptions: {
                            fit: COVER
                            cropFocus: CENTER
                            duotone: {
                                highlight: "#8f84a6"
                                shadow: "#000000"
                                opacity: 90
                            }
                        }
                        breakpoints: [576, 768, 992, 1200, 1400]
                        placeholder: BLURRED
                    )
                }
            }
        }
    `)

    return (
        <BackgroundImage
            className="background-image"
            image={file.childImageSharp.gatsbyImageData}
            alt="A dragon from Kyoto"
            loading="lazy"
        />
    )
}
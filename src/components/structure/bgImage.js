import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const BackgroundImage = styled(GatsbyImage)`
width: 100%;
background-size: cover;
background-position: top center;
background-attachment: fixed;
`
export default function Hero() {
    const imagedata = useStaticQuery(graphql`
    query BackgroundImageQuery {
      file(relativePath: { eq: "IMG_20190228_111545-01.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 80
            backgroundColor: "black"
            jpgOptions: {quality: 80}
            transformOptions: {fit: COVER, cropFocus: CENTER,duotone: {
              highlight: "#8f84a6"
              shadow: "#000000"
              opacity: 80
            }}
          )
        }
      }
    }
    `)
    return(
        <BackgroundImage
            className="background-image"
            image={imagedata.file.childImageSharp.gatsbyImageData}
            alt={'A dragon from Kyoto'}
        />
    )
}

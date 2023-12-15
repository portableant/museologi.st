import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import {Col, Container, Row} from "react-bootstrap";

const contStyles = {
    height: "80vh",
    position: "relative",
}
const headingStyles = {
    marginTop: "30vh",
    position: "absolute"
}

const BackgroundImage = styled(GatsbyImage)`
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;;
`
export default function HeroTop() {
    const imageData = useStaticQuery(graphql`
    query BackgroundImageHeaderQuery {
      file(relativePath: { eq: "DSC00019.JPG" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 80
            backgroundColor: "black"
            jpgOptions: {quality: 80}
            transformOptions: {fit: COVER, cropFocus: CENTER,duotone: {
              highlight: "#77a6a0"
              shadow: "#000000"
              opacity: 80
            }}
          )
        }
      }
    }
    `)
    return(
        <>
            <Container fluid={true} className={"bg-white justify-content-center align-items-center"}>
                <Row>
                    <BackgroundImage
                        className="background-image"
                        image={imageData.file.childImageSharp.gatsbyImageData}
                        alt={'An image of Kyoto'}
                        style={contStyles}
                    />
                    <Col className="text-center" style={headingStyles}>
                        <h1 className="display-1 text-white fw-bolder">Museologi.st</h1>
                        <h2 className="display-6 text-white fw-bold">Archaeologist Technologist</h2>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

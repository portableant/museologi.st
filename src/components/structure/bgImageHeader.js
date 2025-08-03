import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"

const StyledContainer = styled(Container)`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BackgroundImage = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  & > div {
    position: static !important;
  }
`

const ContentOverlay = styled(Col)`
  position: relative;
  z-index: 1;
  text-align: center;
`

const MainHeading = styled.h1`
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
`

const SubHeading = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`

export default function HeroTop() {
    const { file } = useStaticQuery(graphql`
        query BackgroundImageHeaderQuery {
            file(relativePath: { eq: "DSC00019.JPG" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        quality: 80
                        backgroundColor: "black"
                        jpgOptions: { quality: 80 }
                        transformOptions: {
                            fit: COVER
                            cropFocus: CENTER
                            duotone: {
                                highlight: "#77a6a0"
                                shadow: "#000000"
                                opacity: 80
                            }
                        }
                    )
                }
            }
        }
    `)

    return (
        <StyledContainer fluid className="bg-white">
            <BackgroundImage
                image={file.childImageSharp.gatsbyImageData}
                alt="An image of Kyoto"
                loading="eager"
            />
            <Row className="w-100">
                <ContentOverlay>
                    <MainHeading>Museologi.st</MainHeading>
                    <SubHeading>Archaeologist Technologist</SubHeading>
                </ContentOverlay>
            </Row>
        </StyledContainer>
    )
}
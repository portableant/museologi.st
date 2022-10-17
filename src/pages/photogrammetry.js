import * as React from "react"
import Layout from "../components/layout"
import PhotogrammetryLink from "../components/photogrammetry-link";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';

const PhotogrammetryPage = ({data: {allMarkdownRemark: {edges},},}) => {
    const Posts = edges.map(edge => <PhotogrammetryLink key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className={"ml-4 mt-4"}>3D Scans and research work</h1>
                    <p>This page gives an introduction and overview of all the different 3D models I have
                    created in museums.</p>
                </Row>
                <Row>
                    {Posts}
                </Row>
            </Container>
        </Layout>
    );
}
export default PhotogrammetryPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {section: {eq: "3d"}}}, ) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        featuredImg {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [WEBP]
                                    width: 600
                                    quality: 90
                                    transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                                )
                            }
                        }
                        background{
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [WEBP]
                                    width: 1200
                                    quality: 90
                                    transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`
export const Head = () => <title>Photogrammetry work</title>

import * as React from "react"
import Layout from "../components/layouts/layout"
import PhotoLink from "../components/structure/photo-link";
import {graphql} from "gatsby"
import {Row, Container} from 'react-bootstrap';
import Seo from "../components/structure/SEO"

const PhotographsPage = ({data: {allMarkdownRemark: {edges},},}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PhotoLink key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>

            <Container>
                <Row>
                    <h1 className={"ml-4 mt-4"}>Photographs</h1>
                    <Row>
                        {Posts}
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
}
export default PhotographsPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {section: {eq: "image"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
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
                                    formats: [AUTO, WEBP]
                                    width: 600
                                    quality: 80
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
export const Head = () => (
    <Seo title={"Random Photographs"} description={"A collection of photographs I like"}/>
)


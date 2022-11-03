import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Seo from "../components/structure/SEO"
import Pagination from '../components/structure/pagination';

const PhotogrammetryPage = (props) => {
    const Posts = props.data.allMarkdownRemark.edges.map(edge => <PostCard key={edge.node.id} post={edge.node}/>)
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
            <Container fluid className={"mx-auto text-center bg-pastel"}>
                <Pagination pageContext={props.pageContext} />
            </Container>
        </Layout>
    );
}
export default PhotogrammetryPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "3d"}}}
            limit: $limit
            skip: $skip
        ) {
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
    <Seo title={"My photogrammetry and 3d scanning work"} description={"An overview of my photogrammetry work around the world"}/>
)
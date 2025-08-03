import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row, Col} from 'react-bootstrap';
import Seo from "../components/structure/SEO"
import Pagination from '../components/structure/pagination';

const PhotogrammetryPage = React.memo(({data, pageContext}) => {
    // Memoize the posts array to prevent unnecessary re-renders
    const Posts = React.useMemo(() => 
        data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge => <PostCard key={edge.node.id} post={edge.node}/>),
        [data.allMarkdownRemark.edges]
    );

    return (
        <Layout>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="fw-bold text-primary mt-4">3D Scans and research work</h1>
                        <p>
                            This page gives an introduction and overview of all the different 3D models I have
                            created in museums.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {Posts}
                </Row>
            </Container>
            <Container fluid className="mx-auto text-center bg-pastel">
                <Pagination pageContext={pageContext} />
            </Container>
        </Layout>
    );
});

// Add display name for debugging
PhotogrammetryPage.displayName = 'PhotogrammetryPage';

export default PhotogrammetryPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "3d"}}}
            sort: {frontmatter: {date: DESC}}
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
                                    placeholder: DOMINANT_COLOR
                                    height: 600
                                    formats: [AUTO, WEBP]
                                    width: 600
                                    quality: 80
                                    transformOptions: { 
                                        grayscale: false, 
                                        fit: COVER, 
                                        cropFocus: CENTER 
                                    }
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Head = ({pageContext}) => (
    <Seo 
        title={`My photogrammetry and 3D scanning work, page ${pageContext.humanPageNumber}`} 
        description="An overview of my photogrammetry work around the world"
    />
)
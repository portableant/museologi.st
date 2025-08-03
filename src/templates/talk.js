import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";

const TalkPage = React.memo(({data, pageContext}) => {
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
                        <h1 className="ms-4 mt-4 text-primary">A list of talks</h1>
                        <p className="ms-4">
                            This page lists talks and presentations I have given at conferences, workshops, and other events.
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
TalkPage.displayName = 'TalkPage';

export default TalkPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "talks"}}}
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
                                id
                                gatsbyImageData(
                                    placeholder: DOMINANT_COLOR
                                    height: 600
                                    formats: [AUTO, WEBP]
                                    width: 600
                                    quality: 80
                                    transformOptions: {
                                        grayscale: false
                                        fit: COVER
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
        title={`Recent talks, page ${pageContext.humanPageNumber}`} 
        description="A list of talks and presentations I have given at conferences, workshops, and other events"
    />
)
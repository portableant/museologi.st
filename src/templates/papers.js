import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";

const PapersPage = (props) => {
    const Posts = props.data.allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostCard key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="ml-4 mt-4">A list of papers - often collaborative</h1>
                    <Row>
                        {Posts}
                    </Row>
                </Row>
            </Container>
            <Container fluid className={"mx-auto text-center bg-pastel"}>
                <Pagination pageContext={props.pageContext} />
            </Container>
        </Layout>
    );
}
export default PapersPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "papers"}}}
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
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [AUTO, WEBP]
                                    width: 600
                                    quality: 80
                                    transformOptions: {grayscale: false, fit: COVER, cropFocus:
                                    CENTER}
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Head = (props) => (
    <Seo title={"Recent papers in HTML form " + props.pageContext.humanPageNumber} description={"Recent papers"} />
)
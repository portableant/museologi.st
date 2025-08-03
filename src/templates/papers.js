import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";

const PapersPage = ({data, pageContext}) => {
    // Remove unnecessary filter - this should be handled in the GraphQL query
    const Posts = React.useMemo(() => 
        data.allMarkdownRemark.edges.map(edge => 
            <PostCard key={edge.node.id} post={edge.node}/>
        ), [data.allMarkdownRemark.edges]
    );

    return (
        <Layout>
            <Container>
                <Row>
                    <div className="col-12">
                        <h1 className="fw-bold text-primary mt-4">A list of papers - often collaborative</h1>
                    </div>
                    {Posts}
                </Row>
            </Container>
            <Container fluid className="mx-auto text-center bg-pastel">
                <Pagination pageContext={pageContext} />
            </Container>
        </Layout>
    );
}

export default PapersPage

// Fragment for papers list items
export const paperListItemFragment = graphql`
    fragment PaperListItem on MarkdownRemark {
        id
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImg {
                ...ImageSharpFluid
            }
        }
    }
`;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {
                frontmatter: {
                    section: {eq: "papers"}
                    date: {ne: null}
                }
            }
            sort: {frontmatter: {date: DESC}}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...PaperListItem
                }
            }
        }
    }
`

export const Head = ({pageContext}) => (
    <Seo 
        title={`Recent papers in HTML form ${pageContext.humanPageNumber}`} 
        description="Recent papers" 
    />
)
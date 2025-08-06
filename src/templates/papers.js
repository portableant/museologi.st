import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const PapersPage = ({data, pageContext}) => {

    const Posts = React.useMemo(() => 
        data.allMarkdownRemark.edges.map(edge => 
            <PostCard key={edge.node.id} post={edge.node}/>
        ), [data.allMarkdownRemark.edges]
    );
    const { breadcrumb } = pageContext;

    return (
        <Layout>
            <HeaderWithBreadcrumbs 
                    breadcrumbs={breadcrumb?.crumbs || []}
                    title="A list of papers - often collaborative"
                    />
            <Container >
                <Row>
                    <p>I have tried to reproduce much of my collaborative work
                        as HTML pages, so that they are more accessible to a wider audience.
                        This is a list of papers I have written, or contributed to, in some way.
                        Some of are not yet available as HTML pages, but will be in the future.
                    </p>
                </Row>
            </Container>
            <Container>
                <Row>
                    {Posts}
                </Row>
            </Container>
            
            <Pagination pageContext={pageContext} />
            
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
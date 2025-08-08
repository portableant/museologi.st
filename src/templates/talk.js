import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const TalkPage = React.memo(({data, pageContext}) => {
    // Memoize the posts array to prevent unnecessary re-renders
    const Posts = React.useMemo(() => 
        data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge => <PostCard key={edge.node.id} post={edge.node}/>),
        [data.allMarkdownRemark.edges]
    );
    const { breadcrumb } = pageContext

    return (
        <Layout>
            
            <HeaderWithBreadcrumbs
                    breadcrumbs={breadcrumb?.crumbs || []}
                    title="Recent talks"
                    date={null}
                />  
            <Container>
                <Row>
                    <Col xs={12}>
                        <p>
                            This page lists talks and presentations I have given at conferences, workshops, and other events.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {Posts}
                </Row>
            </Container>
            <Pagination pageContext={pageContext} />
        </Layout>
    );
});

// Add display name for debugging
TalkPage.displayName = 'TalkPage';

export default TalkPage

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { section: { eq: "talks" } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...FrontmatterFields
          frontmatter {
            featuredImg {
              ...FeaturedImage
            }
          }
        }
      }
    }
  }
`;

export const Head = ({pageContext}) => (
    <Seo 
        title={`Recent talks, page ${pageContext.humanPageNumber}`} 
        description="A list of talks and presentations I have given at conferences, workshops, and other events"
    />
)
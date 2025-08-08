import React from "react";
import Layout from "../components/layouts/layout";
import PostCard from "../components/structure/post-card";
import { graphql } from "gatsby";
import { Container, Row } from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const BlogPage = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.date)
        .map(edge => (
            <PostCard 
                key={edge.node.id} 
                post={edge.node}
            />
        ));
    const { breadcrumb } = pageContext;
    
    return (
        <>
            <Layout>
                <HeaderWithBreadcrumbs
                            breadcrumbs={breadcrumb?.crumbs || []}
                            title="Sporadic blog posts"
                            date={null}
                        />
                
                <Container>
                    <Row className="mt-4">
                        {posts}
                    </Row>
                </Container>

                <Pagination pageContext={pageContext} />
            
            </Layout>
        </>
    );
};

export default BlogPage;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { section: { eq: "blog" } } }
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

export const Head = ({ pageContext }) => (
    <Seo 
        title={`Blog and news page ${pageContext.humanPageNumber}`} 
        description={`A sporadically populated blog; news, stories, tips`} 
    />
);
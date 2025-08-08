import * as React from "react";
import Layout from "../components/layouts/layout";
import PostCard from "../components/structure/post-card";
import { graphql } from "gatsby";
import { Container, Row } from 'react-bootstrap';
import Seo from "../components/structure/SEO";
import Pagination from '../components/structure/pagination';
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const PhotogrammetryPage = React.memo(({ data, pageContext }) => {
    // Memoize the posts array to prevent unnecessary re-renders
    const Posts = React.useMemo(
        () =>
            data.allMarkdownRemark.edges
                .filter(edge => !!edge.node.frontmatter.date)
                .map(edge => <PostCard key={edge.node.id} post={edge.node} />),
        [data.allMarkdownRemark.edges]
    );
    const { breadcrumb } = pageContext;

    return (
        <Layout>
            <HeaderWithBreadcrumbs
                    breadcrumbs={breadcrumb?.crumbs || []}
                    title="3D Scans and Research Work"
                    date={null}
                />
                <Container>
                <p>
                    This page gives an introduction and overview of all the different 3D models I have
                    created in museums.
                </p>
                <Row>
                    {Posts}
                </Row>
            </Container>
            <Pagination pageContext={pageContext} />
        </Layout>
    );
});

PhotogrammetryPage.displayName = 'PhotogrammetryPage';

export default PhotogrammetryPage;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { section: { eq: "3d" } } }
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
        title={`My photogrammetry and 3D scanning work, page ${pageContext.humanPageNumber}`}
        description="An overview of my photogrammetry work around the world"
    />
);
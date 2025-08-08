import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostCardFront from './post-card-front';
import { Container, Row } from 'react-bootstrap';

const query = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 3
      filter: { frontmatter: { section: { eq: "blog" } } }
    ) {
      edges {
        node {
          ...ProjectCardFrontmatterFragment
          id
          excerpt
        }
      }
    }
  }
`;

const LatestPosts = () => {
  const { allMarkdownRemark: { edges: posts } } = useStaticQuery(query);

  return (
    <Container className="py-2 d-flex my-4">
      <Row>
        {posts.map(({ node }) => (
          <PostCardFront key={node.id} post={node} />
        ))}
      </Row>
    </Container>
  );
};

export default LatestPosts;

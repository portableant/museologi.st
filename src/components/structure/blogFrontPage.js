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
          id
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImg {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  height: 600
                  width: 600
                  quality: 80
                  formats: [AUTO, WEBP]
                  transformOptions: {
                    fit: COVER
                    cropFocus: CENTER
                    duotone: {
                      highlight: "#77a6a0"
                      shadow: "#000000"
                      opacity: 60
                    }
                  }
                  webpOptions: { quality: 80 }
                )
              }
            }
          }
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

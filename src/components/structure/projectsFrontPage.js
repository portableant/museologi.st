import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import PostCardFront from "./post-card-front";
import {Container} from 'react-bootstrap';

const query = graphql`
    {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    limit: 3
    filter: {frontmatter: {section: {eq: "projects"}}}
  ) {
    edges {
      node {
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          featuredImg {
            childImageSharp {
              id
              gatsbyImageData(
                placeholder: BLURRED
                height: 600
                formats: [AUTO, WEBP]
                width: 600
                quality: 90
                transformOptions: {fit: COVER, cropFocus: CENTER,duotone: {
              highlight: "#77a6a0"
              shadow: "#000000"
              opacity: 60
            }}
                webpOptions: {quality: 90}
              )
            }
          }
        }
        id
        excerpt
      }
    }
  }
}
`;

const LatestProjects = () => {
    const data = useStaticQuery(query);
    const posts = data.allMarkdownRemark.edges;
    return (
        <Container className={'py-2 d-flex my-4'} >
                    {posts.map(({node}) => (

                        <PostCardFront key={node.id} post={node}/>
                    ))}
        </Container>
    );
};
export default LatestProjects;

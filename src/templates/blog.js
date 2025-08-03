import React from "react";
import Layout from "../components/layouts/layout";
import PostCard from "../components/structure/post-card";
import { graphql } from "gatsby";
import { Container, Row } from 'react-bootstrap';
import Pagination from '../components/structure/pagination';
import Seo from "../components/structure/SEO";

const BlogPage = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.date)
        .map(edge => (
            <PostCard 
                key={edge.node.id} 
                post={edge.node}
            />
        ));

    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="fw-bold mt-4 text-primary">Sporadic blog posts</h1>
                    <Row>
                        {posts}
                    </Row>
                </Row>
            </Container>
            <Container fluid className="mx-auto text-center bg-pastel">
                <Pagination pageContext={pageContext} />
            </Container>
        </Layout>
    );
};

export default BlogPage;

export const pageQuery = graphql`
    query BlogPageQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { frontmatter: { section: { eq: "blog" } } }
            sort: { frontmatter: { date: DESC } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        github_repo {
                            name
                            url
                        }
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        featuredImg {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [AUTO, WEBP]
                                    width: 600
                                    quality: 80
                                    transformOptions: { 
                                        grayscale: false, 
                                        fit: COVER, 
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
`;

export const Head = ({ pageContext }) => (
    <Seo 
        title={`Blog and news page ${pageContext.humanPageNumber}`} 
        description="A sporadically populated blog; news, stories, tips" 
    />
);
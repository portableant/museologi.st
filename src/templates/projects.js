import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Row,Container} from "react-bootstrap";
import Seo from "../components/structure/SEO";
import Pagination from "../components/structure/pagination";

const ProjectsPage = (props) => {
    const Posts = props.data.allMarkdownRemark.edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostCard key={edge.node.id} post={edge.node}/>)
    return (
        <Layout>
            <Container>
                <Row>
                    <h1 className="ml-4 mt-4">Research, Development and Work projects</h1>
                    <p>
                        This page lists a selection of projects that I have worked on, as a leader, participant or advisor.
                        Some of these projects are interlinked to each other.
                    </p>
                    {Posts}
                </Row>
            </Container>
            <Container fluid className={"mx-auto text-center bg-pastel"}>
                <Pagination pageContext={props.pageContext} />
            </Container>
        </Layout>
    );
}
export default ProjectsPage

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: {frontmatter: {section: {eq: "projects"}}}
            sort: {frontmatter: {title: ASC}}
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
                        date(formatString: "YYYY")
                        slug
                        title
                        institution
                        featuredImg {
                            childImageSharp {
                                id
                                gatsbyImageData(
                                    placeholder: DOMINANT_COLOR
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
    <Seo title={"Projects I have worked on, page " + props.pageContext.humanPageNumber} description={"An overview of projects I have worked on in museums and heritage"}/>
)
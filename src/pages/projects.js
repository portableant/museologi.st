import * as React from "react"
import Layout from "../components/layouts/layout"
import ProjectLink from "../components/structure/project-link";
import {graphql} from "gatsby"
import {Row,Container} from "react-bootstrap";
import {SEO} from "../components/structure/seo";

const ProjectsPage = ({data: {allMarkdownRemark: {edges},},}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <ProjectLink key={edge.node.id} post={edge.node}/>)
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
        </Layout>
    );
}
export default ProjectsPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {section: {eq: "projects"}}}, sort: { order: ASC, fields: [frontmatter___title] }) {
            edges {
                node {
                    id
                    frontmatter {
                        github_repo{
                            name
                            url
                        }
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        institution
                        background{
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [AUTO, WEBP, AVIF]
                                    width: 1200
                                    quality: 90
                                    transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                                )
                            }
                        }
                        featuredImg {
                            childImageSharp {
                                id
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: [AUTO, WEBP, AVIF]
                                    width: 600
                                    quality: 90
                                    transformOptions: { grayscale: false,fit: COVER, cropFocus: CENTER }
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`
export const Head = () => (
    <SEO title={"Projects I have worked on"} description={"An overview of projects I have worked on in museums and heritage"}/>
)
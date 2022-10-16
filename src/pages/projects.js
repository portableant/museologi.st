import * as React from "react"
import Layout from "../components/layout"
import ProjectLink from "../components/project-link";
import {graphql} from "gatsby"
import {Row,Container} from "react-bootstrap";

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
                        github_repo
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        institution
                        featuredImg {
                            childImageSharp {
                                id
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    height: 600
                                    formats: WEBP
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
export const Head = () => <title>Projects</title>

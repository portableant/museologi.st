import * as React from "react"
import Layout from "../components/layouts/layout"
import PostCard from "../components/structure/post-card";
import {graphql} from "gatsby"
import {Row, Container} from "react-bootstrap";
import Seo from "../components/structure/SEO";
import Pagination from "../components/structure/pagination";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const ProjectsPage = React.memo(({data, pageContext}) => {
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
                title="Research, Development and Work projects"
                date={null}
            />
            <Container>
                <Row>
                    <div className="col-12">
                        <p>
                            This page lists a selection of projects that I have worked on, as a leader, participant or advisor.
                            Some of these projects are interlinked to each other.
                        </p>
                    </div>
                    {Posts}
                </Row>
            </Container>
            <Pagination pageContext={pageContext} />
        </Layout>
    );
});

// Add display name for debugging
ProjectsPage.displayName = 'ProjectsPage';

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
                                gatsbyImageData(
                                    placeholder: DOMINANT_COLOR
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
`

export const Head = ({pageContext}) => (
    <Seo 
        title={`Projects I have worked on, page ${pageContext.humanPageNumber}`} 
        description="An overview of projects I have worked on in museums and heritage"
    />
)
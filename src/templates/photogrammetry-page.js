import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import FairData from "../components/elements/fair-data";
import Tags from '../components/elements/tag';

export default function PhotogrammetryPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    const isSSR = typeof window === "undefined";
    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>
            <Container>
                <Row className={"post-body"}>
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                        <h2 className="text-primary small">{frontmatter.date}</h2>
                    </div>
                    <div className="post-body bg-white text-black p-4"
                         dangerouslySetInnerHTML={{__html: html}}/>
                </Row>

            </Container>
            <Container fluid className="bg-pastel post-body">
                <Container>
                    <FairData zenodo_doi={frontmatter.zenodo_doi} github_repo={frontmatter.github_repo}
                              project_website={frontmatter.project_website}
                              deposited_archive={frontmatter.deposited_archive}/>
                </Container>
            </Container>
            <Tags tags={frontmatter.tags}/>

            {!isSSR && frontmatter.geo_lat && (
                <Map geo_lat={frontmatter.geo_lat} geo_lon={frontmatter.geo_lon}/>
            )}

        </Layout>
    );
}


export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            frontmatter {
                slug
                date(formatString: "MMMM DD, YYYY")
                title
                section
                tags
                geo_lat
                geo_lon
                github_repo {
                    url
                    name
                }
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
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <title>{frontmatter.title}</title>
    )
}
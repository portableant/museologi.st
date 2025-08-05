import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import { Container, Col } from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import FairData from "../components/elements/fair-data";
import Tags from '../components/elements/tag';
import Seo from "../components/structure/SEO";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const PhotogrammetryPageTemplate = React.memo(({ data: { markdownRemark }, pageContext }) => {
    const { frontmatter, html } = markdownRemark;
    const isSSR = typeof window === "undefined";
    const breadcrumb = pageContext?.breadcrumb;
    console.log(pageContext);

    // Memoize the FairData props to prevent unnecessary re-renders
    const fairDataProps = React.useMemo(() => ({
        zenodo_doi: frontmatter.zenodo_doi,
        github_repo: frontmatter.github_repo,
        project_website: frontmatter.project_website,
        deposited_archive: frontmatter.deposited_archive
    }), [
        frontmatter.zenodo_doi,
        frontmatter.github_repo,
        frontmatter.project_website,
        frontmatter.deposited_archive
    ]);

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background} />
            <HeaderWithBreadcrumbs
                    breadcrumbs={breadcrumb?.crumbs || []}
                    title={frontmatter.title}
                    date={frontmatter.date}
                />
            <Container>
                <Col xs={12}>
                    <div
                        className="post-body bg-white text-black p-4"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </Col>
            </Container>

            <Container fluid className="bg-pastel">
                <Container>
                    <FairData {...fairDataProps} />
                </Container>
            </Container>

            <Tags tags={frontmatter.tags} />

            {!isSSR && frontmatter.geo_lat && (
                <Map
                    geo_lat={frontmatter.geo_lat}
                    geo_lon={frontmatter.geo_lon}
                />
            )}
        </Layout>
    );
});

// Add display name for debugging
PhotogrammetryPageTemplate.displayName = 'PhotogrammetryPageTemplate';

export default PhotogrammetryPageTemplate;

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            ...MarkdownContent
        }
    }
`;

export function Head({ data: { markdownRemark } }) {
    const { frontmatter } = markdownRemark;
    return (
        <Seo
            title={frontmatter.title}
            featured={frontmatter.featuredImg}
            description={frontmatter.description}
        />
    );
}

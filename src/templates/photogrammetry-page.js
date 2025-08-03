import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row, Col} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import FairData from "../components/elements/fair-data";
import Tags from '../components/elements/tag';
import Seo from "../components/structure/SEO";
import {formatReadingTime} from "../utils/helpers";

const PhotogrammetryPageTemplate = React.memo(({data: {markdownRemark}}) => {
    const {frontmatter, html, timeToRead} = markdownRemark;
    const isSSR = typeof window === "undefined";

    // Memoize the reading time text
    const readingTimeText = React.useMemo(() => 
        formatReadingTime(timeToRead), 
        [timeToRead]
    );

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
            <HeaderImage backgroundImage={frontmatter.background}/>
            <Container>
                <Row className="post-body">
                    <Col xs={12}>
                        <div className="px-4">
                            <header>
                                <h1 className="text-primary fw-bold mt-4">{frontmatter.title}</h1>
                            </header>
                            <h2 className="text-primary fw-light small">{frontmatter.date}</h2>
                            {timeToRead && (
                                <h3 className="text-primary lead small fw-light">{readingTimeText}</h3>
                            )}
                        </div>
                        <div 
                            className="post-body bg-white text-black p-4"
                            dangerouslySetInnerHTML={{__html: html}}
                        />
                    </Col>
                </Row>
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

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Seo 
            title={frontmatter.title} 
            featured={frontmatter.featuredImg} 
            description={frontmatter.description}
        />
    );
}
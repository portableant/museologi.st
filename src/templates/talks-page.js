import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row, Col} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import Tags from "../components/elements/tag";
import Seo from "../components/structure/SEO";
import {formatReadingTime} from "../utils/helpers";

import ClientOnlyCloverViewer from "../components/ClientOnlyCloverViewer";

const TalksPageTemplate = React.memo(({data: {markdownRemark}}) => {
    const {frontmatter, timeToRead, html} = markdownRemark;
    const isSSR = typeof window === "undefined";

    // Memoize the reading time string
    const readingTimeText = React.useMemo(() => 
        formatReadingTime(timeToRead), 
        [timeToRead]
    );

    // Memoize the IIIF viewers to prevent unnecessary re-renders
    const iiifViewers = React.useMemo(() => {
        if (!frontmatter.manifests) return null;
        
        return frontmatter.manifests.map((manifest, idx) => (
            <div key={manifest || idx} className="my-4" id={`iiif-viewer-${idx}`}>
                <ClientOnlyCloverViewer manifestId={manifest} />
            </div>
        ));
    }, [frontmatter.manifests]);

    // Memoize the IIIF section
    const iiifSection = React.useMemo(() => {
        if (isSSR || !frontmatter.manifests) return null;

        return (
            <Container className="bg-pastel p-4 mb-4">
                <h2 className="text-black fw-bold mt-4">IIIF Demos</h2>
                <p className="text-black">
                    The following IIIF manifests are provided for demonstration purposes. The images are stored on 
                    AWS in an S3 bucket, and processed via a Cantaloupe IIIF server, manifests are created from a list of files in directus 
                    and the cantaloupe json. The manifest is generated using a small node script and the static files are served off 
                    github pages and the viewer below is the Clover IIIF viewer.
                </p>
                {iiifViewers}
            </Container>
        );
    }, [isSSR, frontmatter.manifests, iiifViewers]);

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>
            
            <Container>
                <Row className="post-body text-break">
                    <Col xs={12}>
                        <div className="px-4">
                            <header>
                                <h1 className="text-primary fw-bold mt-4">{frontmatter.title}</h1>
                            </header>
                            <h2 className="text-primary fw-light small">{frontmatter.date}</h2>
                            <h3 className="text-primary fw-light lead small">{readingTimeText}</h3>
                        </div>
                        <div 
                            className="bg-white text-black p-4"
                            dangerouslySetInnerHTML={{__html: html}}
                        />
                    </Col>
                </Row>
            </Container>
            
            {iiifSection}
            
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
TalksPageTemplate.displayName = 'TalksPageTemplate';

export default TalksPageTemplate;

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            timeToRead
            wordCount {
                words
            }
            frontmatter {
                slug
                date(formatString: "MMMM DD, YYYY")
                title
                description
                section
                tags
                geo_lat
                geo_lon
                manifests
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
                background {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 1200
                            quality: 90
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
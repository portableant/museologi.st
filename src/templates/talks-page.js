import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import Tags from "../components/elements/tag";
import Seo from "../components/structure/SEO";
import {formatReadingTime} from "../utils/helpers";

import ClientOnlyCloverViewer from "../components/ClientOnlyCloverViewer"; // Import the client-only component

export default function TalksPageTemplate({data: {markdownRemark}}) {

    const {frontmatter, timeToRead, html} = markdownRemark;

    const isSSR = typeof window === "undefined";

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>

         
            <Container>
                <Row className={"post-body"}>
                    <div className="px-4">
                        <header><h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1></header>
                        <h2 className="text-primary small">{frontmatter.date}</h2>
                        <h3 className="text-primary lead small">{`${formatReadingTime(timeToRead)}`}</h3>
                    </div>
                    <div className="bg-white text-black p-4"
                         dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>
             {!isSSR  && frontmatter.manifests && (
            <Container className="bg-pastel p-4 mb-4">
                <h2 className="text-black fw-bold mt-4">IIIF Demos</h2>
                <p className="text-black">The following IIIF manifests are provided for demonstration purposes. The images are stored on 
                    AWS in an S3 bucket, and processed via a Cantaloupe IIIF server, manifests are created from a list of files in directus 
                    and the cantaloupe json. The manifest is generated using a small node script and the static files are served off 
                    github pages and the viewer below is the Clover IIIF viewer.
                </p>
            {frontmatter.manifests && frontmatter.manifests.map((manifest, idx) => (
                    <div key={idx} className="my-4" id={`iiif-viewer-${idx}`}> {/* Use a unique ID */}
                        <ClientOnlyCloverViewer manifestId={manifest} />
                    </div>
                ))}
            </Container>
            )}
            <Tags tags={frontmatter.tags} />
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
                featuredImg{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP]
                            width: 600
                            quality: 80
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
                background{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP]
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
        <Seo title={frontmatter.title} featured={frontmatter.featuredImg} description={frontmatter.description}/>
    )
}

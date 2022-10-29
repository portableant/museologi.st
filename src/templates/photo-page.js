import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Tags from '../components/elements/tag';
import Map from "../components/elements/map";
import {SEO} from "../components/structure/seo";

export default function PhotographsPageTemplate({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    const isSSR = typeof window === "undefined";

    return (
        <Layout>
            <Container>
                <Row className={"post-body"}>
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                        <h2 className="text-black lead">{frontmatter.date}</h2>
                    </div>
                    <div className="post-body bg-white text-black p-4 text-center">
                        <GatsbyImage className="mx-auto" image={ getImage(frontmatter.featuredImg) } alt={frontmatter.featuredImgAlt}/>
                    </div>
                </Row>
            </Container>

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
            frontmatter {
                slug
                featuredImgAlt
                featuredImg{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 1000
                            formats: [AUTO, WEBP, AVIF]
                            width: 1000
                            quality: 90
                            transformOptions: { grayscale: false, fit: COVER, cropFocus: CENTER }
                        )
                    }
                }
                date(formatString: "MMMM DD, YYYY")
                title
                section
                tags
                geo_lat
                geo_lon
            }
        }
    }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (<SEO title={frontmatter.title} featured={frontmatter.featuredImg}/>)
}
import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row} from "react-bootstrap";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Tags from '../components/elements/tag';
import Map from "../components/elements/map";
import Seo from "../components/structure/SEO";
import ExifTags from "../components/elements/exif-tags";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

export default function PhotographsPageTemplate({data: {markdownRemark}, pageContext}) {
    const {frontmatter} = markdownRemark;
    const isSSR = typeof window === "undefined";
    const breadcrumb = pageContext?.breadcrumb;

    return (
        <Layout>
            
            <HeaderWithBreadcrumbs
                    breadcrumbs={breadcrumb?.crumbs || []}
                    title={frontmatter.title}
                    date={frontmatter.date}
                />
            <Container className="mt-4">
                <Row className={"post-body"}>
                    <div className="bg-white text-black p-4 text-center">
                        <GatsbyImage className="mx-auto" image={ getImage(frontmatter.featuredImg) } alt={frontmatter.featuredImgAlt}/>
                    </div>
                </Row>
            </Container>
            
            <ExifTags imageData={frontmatter.featuredImg} />
         

            <Tags tags={frontmatter.tags} />
            {!isSSR && frontmatter.geo_lat && (
                <Map geo_lat={frontmatter.geo_lat} geo_lon={frontmatter.geo_lon}/>
            )}

        </Layout>
    );
}

// GraphQL fragments and queries - imported automatically by Gatsby from src/fragments/commonFragments.js
export const pageQuery = graphql`
    query PhotoById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...PhotoDetails
    }
  }
`;

export function Head({data: {markdownRemark}}) {
    const {frontmatter} = markdownRemark;
    return (
        <Seo title={frontmatter.title} featured={frontmatter.featuredImg} description={frontmatter.description}/>
    )
}
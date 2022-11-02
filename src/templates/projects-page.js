import {graphql} from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import {Container, Row, Badge} from "react-bootstrap";
import FairData from "../components/elements/fair-data";
import Publications from "../components/elements/publications";
import People from "../components/elements/people";
import News from "../components/elements/news";
import Funding from "../components/elements/funding";
import Documents from "../components/elements/documents";
import Vimeo from "../components/elements/vimeo";
import SlideShow from "../components/elements/slide-show";
import HeaderImage from "../components/elements/headerImage";
import PlyrAudio from "../components/elements/plyr-audio";
import Tags from '../components/elements/tag';
import Map from "../components/elements/map";
import Seo from "../components/structure/SEO";

export default function ProjectsPageTemplate({data: {markdownRemark}}) {
    const {frontmatter, html} = markdownRemark;
    const isSSR = typeof window === "undefined";

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>

            <Container>
                <Row className="post-body">
                    <div className="px-4">
                        <h1 className="text-black fw-bold mt-4">{frontmatter.title}</h1>
                        {frontmatter.date && <h2 className="text-primary small">{frontmatter.date}</h2>}
                        {frontmatter.role && <Badge className="bg-dark p-2 my-1 mx-1">Role(s): {frontmatter.role}</Badge>}
                        {frontmatter.institution && <Badge className="bg-dark p-2 my-1 mx-1">{frontmatter.institution}</Badge>}

                    </div>
                    <div className="post-body bg-white text-black p-4" dangerouslySetInnerHTML={{__html: html}}/>
                </Row>
            </Container>
            <Vimeo vimeo={frontmatter.vimeo}/>
            <PlyrAudio audio={frontmatter.audio}/>
            <Container fluid className="bg-pastel post-body">
                <Container>
                    <FairData zenodo_doi={frontmatter.zenodo_doi} github_repo={frontmatter.github_repo} project_website={frontmatter.project_website} deposited_archive={frontmatter.deposited_archive}/>
                    <People collaborators={frontmatter.collaborators} partners={frontmatter.partners}/>
                    <Documents documents={frontmatter.documents}/>
                    <Funding funders={frontmatter.funders} grant_amount={frontmatter.grant_amount}
                             grant_number={frontmatter.grant_number}/>
                    <Publications publications={frontmatter.publications}/>
                    <News news={frontmatter.news}/>
                </Container>
            </Container>
            {frontmatter.images && <Container fluid className="bg-dark mt-3 p-3 text-white">
                <SlideShow images={frontmatter.images}></SlideShow>
            </Container>}
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
                date(formatString: "MMMM DD, YYYY")
                section
                title
                description
                role
                featuredImg {
                    id
                    absolutePath
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP, AVIF]
                            width: 600
                            quality: 90
                            transformOptions: {grayscale: false, fit: COVER, cropFocus: CENTER}
                        )
                    }
                }
                featuredImgAlt
                partners
                collaborators
                institution
                publications
                geo_lat
                geo_lon
                news{
                    title
                    url
                    medium
                }
                background {
                    id
                    absolutePath
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            height: 600
                            formats: [AUTO, WEBP, AVIF]
                            width: 1200
                            quality: 90
                            transformOptions: {grayscale: false, fit: COVER, cropFocus: CENTER}
                        )
                    }
                }
                project_website
                slug
                vimeo
                zenodo_doi
                github_repo {
                    url
                    name
                }
                type
                grant_number
                grant_amount
                funder
                funders
                tags
                deposited_archive{
                    title
                    url
                    doi
                    holder
                }
                documents {
                    title
                    type
                    location
                }
                audio{
                    title
                    type
                    location
                    author
                    project
                }
                images {
                    caption
                    image {
                        id
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                height: 900
                                formats: [AUTO, WEBP, AVIF]
                                width: 2000
                                quality: 90
                                transformOptions: { grayscale: false,fit: COVER, cropFocus: CENTER }
                            )
                        }
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
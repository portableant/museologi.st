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
import {formatReadingTime} from "../utils/helpers";

const ProjectsPageTemplate = React.memo(({data: {markdownRemark}}) => {
    const {frontmatter, html, timeToRead} = markdownRemark;
    const isSSR = typeof window === "undefined";

    // Memoize computed values
    const formattedReadingTime = React.useMemo(() => formatReadingTime(timeToRead), [timeToRead]);
    const hasGeoLocation = React.useMemo(() => 
        frontmatter.geo_lat && frontmatter.geo_lon, 
        [frontmatter.geo_lat, frontmatter.geo_lon]
    );

    // Memoize project metadata section
    const projectMetadata = React.useMemo(() => (
        <header className="px-4">
            <h1 className="text-primary fw-bold mt-4">{frontmatter.title}</h1>
            {frontmatter.date && (
                <div className="text-primary small mb-2">
                    <time dateTime={frontmatter.date}>{frontmatter.date}</time>
                </div>
            )}
            {frontmatter.role && (
                <Badge className="bg-dark p-2 my-1 mx-1" as="span">
                    Role(s): {frontmatter.role}
                </Badge>
            )}
            {frontmatter.institution && (
                <Badge className="bg-dark p-2 my-1 mx-1" as="span">
                    {frontmatter.institution}
                </Badge>
            )}
            <div className="text-primary lead small my-1">{formattedReadingTime}</div>
        </header>
    ), [frontmatter.title, frontmatter.date, frontmatter.role, frontmatter.institution, formattedReadingTime]);

    // Memoize project data props to prevent child re-renders
    const fairDataProps = React.useMemo(() => ({
        zenodo_doi: frontmatter.zenodo_doi,
        github_repo: frontmatter.github_repo,
        project_website: frontmatter.project_website,
        deposited_archive: frontmatter.deposited_archive
    }), [frontmatter.zenodo_doi, frontmatter.github_repo, frontmatter.project_website, frontmatter.deposited_archive]);

    const peopleProps = React.useMemo(() => ({
        collaborators: frontmatter.collaborators,
        partners: frontmatter.partners
    }), [frontmatter.collaborators, frontmatter.partners]);

    const fundingProps = React.useMemo(() => ({
        funders: frontmatter.funders,
        grant_amount: frontmatter.grant_amount,
        grant_number: frontmatter.grant_number
    }), [frontmatter.funders, frontmatter.grant_amount, frontmatter.grant_number]);

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background}/>

            <Container>
                <Row className="post-body text-break">
                    {projectMetadata}
                    <article 
                        className="bg-white text-black p-4" 
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                </Row>
            </Container>

            {frontmatter.vimeo && <Vimeo vimeo={frontmatter.vimeo}/>}
            {frontmatter.audio && <PlyrAudio audio={frontmatter.audio}/>}
            
            <Container fluid className="bg-pastel" id="project">
                <Container>
                    <FairData {...fairDataProps}/>
                    <People {...peopleProps}/>
                    {frontmatter.documents && <Documents documents={frontmatter.documents}/>}
                    <Funding {...fundingProps}/>
                    {frontmatter.publications && <Publications publications={frontmatter.publications}/>}
                    {frontmatter.news && <News news={frontmatter.news}/>}
                </Container>
            </Container>

            {frontmatter.images && (
                <Container fluid className="bg-dark mt-3 p-3 text-white">
                    <SlideShow images={frontmatter.images}/>
                </Container>
            )}

            {frontmatter.tags && <Tags tags={frontmatter.tags}/>}
            
            {!isSSR && hasGeoLocation && (
                <Map 
                    geo_lat={frontmatter.geo_lat} 
                    geo_lon={frontmatter.geo_lon}
                />
            )}
        </Layout>
    );
});

ProjectsPageTemplate.displayName = 'ProjectsPageTemplate';

export default ProjectsPageTemplate;

export const pageQuery = graphql`
    query ProjectsPageQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            timeToRead
            wordCount {
                words
            }
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
                            formats: [AUTO, WEBP]
                            width: 600
                            quality: 80
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
                            formats: [AUTO, WEBP]
                            width: 1200
                            quality: 80
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
                                formats: [AUTO, WEBP]
                                width: 2000
                                quality: 80
                                transformOptions: { grayscale: false,fit: COVER, cropFocus: CENTER }
                            )
                        }
                    }
                }
            }
        }
    }
`;

export const Head = ({data: {markdownRemark}}) => {
    const {frontmatter} = markdownRemark;
    return (
        <Seo 
            title={frontmatter.title} 
            featured={frontmatter.featuredImg} 
            description={frontmatter.description}
        />
    );
};
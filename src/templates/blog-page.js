import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layouts/layout";
import { Container, Row } from "react-bootstrap";
import HeaderImage from "../components/elements/headerImage";
import Map from "../components/elements/map";
import Tags from "../components/elements/tag";
import Seo from "../components/structure/SEO";
import { formatReadingTime } from "../utils/helpers";
import HeaderWithBreadcrumbs from "../components/structure/headerWithBreadcrumbs";

const BlogPageTemplate = React.memo(({ data: { markdownRemark }, pageContext }) => {
    const { frontmatter, timeToRead, html } = markdownRemark;
    const isSSR = typeof window === "undefined";
    // Memoize computed values
    const formattedReadingTime = React.useMemo(() => formatReadingTime(timeToRead), [timeToRead]);
    const hasGeoLocation = React.useMemo(
        () => frontmatter.geo_lat && frontmatter.geo_lon,
        [frontmatter.geo_lat, frontmatter.geo_lon]
    );

    // Use pageContext for breadcrumbs or other context-specific data
    const breadcrumbs = pageContext?.breadcrumb.crumbs;

    return (
        <Layout>
            <HeaderImage backgroundImage={frontmatter.background} />
            
            <HeaderWithBreadcrumbs
                    breadcrumbs={breadcrumbs || []}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    readingTime={formattedReadingTime}
                />
            <Container>
                <Row className="post-body">
                    <article
                        className="bg-white text-black p-4"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </Row>
            </Container>

            {frontmatter.tags && <Tags tags={frontmatter.tags} />}

            {!isSSR && hasGeoLocation && (
                <Map
                    geo_lat={frontmatter.geo_lat}
                    geo_lon={frontmatter.geo_lon}
                />
            )}
        </Layout>
    );
});

BlogPageTemplate.displayName = 'BlogPageTemplate';

export default BlogPageTemplate;

export const pageQuery = graphql`
    query BlogPageQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            id
            timeToRead
            wordCount {
                words
            }
            ...BlogFrontmatterFragment
        }
    }
`;

export const Head = ({ data: { markdownRemark } }) => {
    const { frontmatter } = markdownRemark;
    return (
        <Seo
            title={frontmatter.title}
            featured={frontmatter.featuredImg}
            description={frontmatter.description}
        />
    );
};
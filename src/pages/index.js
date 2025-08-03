import React from "react";
import HomeLayout from "../components/layouts/homeLayout";
import { Container } from "react-bootstrap";
import Seo from "../components/structure/SEO";
import BlogFrontPage from "../components/structure/blogFrontPage";
import Logos from "../components/structure/logos";
import LatestProjects from "../components/structure/projectsFrontPage";
import LatestPapers from "../components/structure/papersFrontPage";
import Hero from "../components/structure/bgImage";
import HeroTop from "../components/structure/bgImageHeader";
//import Video from "../components/elements/video";

const sections = [
    {
        title: "Latest Projects",
        Component: LatestProjects,
    },
    {
        title: "Latest Papers",
        Component: LatestPapers,
    },
    {
        title: "Latest Blog Posts",
        Component: BlogFrontPage,
    },
];

const IndexPage = () => (
    <HomeLayout>
        <HeroTop />
        {sections.map(({ title, Component }, idx) => (
            <Container fluid className="bg-pastel py-3" key={title}>
                <h2 className="display-6 text-center fw-bold text-dark">{title}</h2>
                <Component />
            </Container>
        ))}
        <Logos />
        <Hero />
        {/* 
        <Container fluid className="px-0 py-0 mb-0 my-0">
            <Video src="/video/welcomescreen.mp4" className="fullscreen" />
        </Container>
        */}
    </HomeLayout>
);

export default IndexPage;

export const Head = () => (
    <Seo title="Daniel Pett, Museologi.st" description="A website about Daniel Pett and his work" />
);
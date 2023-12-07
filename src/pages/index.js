import * as React from "react"
import HomeLayout from "../components/layouts/homeLayout";
import {Container} from "react-bootstrap";
import Seo from "../components/structure/SEO";
import BlogFrontPage from"../components/structure/blogFrontPage";
import Logos from "../components/structure/logos";
import LatestProjects from "../components/structure/projectsFrontPage";
import Hero from "../components/structure/bgImage";
import HeroTop from "../components/structure/bgImageHeader";

// import Video from "../components/structure/video";



const IndexPage = () => {
    return (
        <HomeLayout>
            <HeroTop />

            <Container fluid={true} className={'bg-pastel py-3'}>
                <h2 className="display-6 text-center fw-bold text-dark visually-hidden-focusable">Latest Projects</h2>
                    <LatestProjects />
            </Container>
            <Container fluid={true} className={'bg-pastel py-3'}>
                    <h2 className="display-6 text-center fw-bold text-dark visually-hidden-focusable">Latest Blog Posts</h2>
                    <BlogFrontPage />
            </Container>

            <Logos />
            <Hero />
            {/*<Container fluid className={"px-0 py-0 mb-0 my-0"}>*/}
            {/*    <Video src='/video/welcomescreen.mp4' className="fullscreen"/>*/}
            {/*</Container>*/}

        </HomeLayout>
    )
}

export default IndexPage

export const Head = () => (
    <Seo title={"Daniel Pett, Museologi.st"} description={"A website about Daniel Pett and his work"}/>
)
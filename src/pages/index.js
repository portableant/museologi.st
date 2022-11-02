import * as React from "react"
import HomeLayout from "../components/layouts/homeLayout";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "gatsby";
import Seo from "../components/structure/SEO";
// import Video from "../components/structure/video";

const contStyles = {
    height: "60vh",
    backgroundColor: "rgb(165, 230, 236)"
}
const headingStyles = {
    marginTop: "20vh",
}
const bgStyles = {
    height: "60vh",
    background: "url('https://live.staticflickr.com/3197/2402571617_f7fcc49137_h.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}
const IndexPage = () => {
    return (
        <HomeLayout>
            <Container fluid={true} className="p-5 justify-content-center align-items-center" style={contStyles}>
                <Row>
                    <Col className="text-center" style={headingStyles}>
                        <p className="display-1">Museologi.st</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item mx-4"><Link to={'/projects'} className="text-dark">Projects</Link></li>
                            <li className="list-inline-item mx-4"><Link to={'/blog'} className="text-dark">Blog</Link></li>
                            <li className="list-inline-item mx-4"><Link to={'/photogrammetry'} className="text-dark">3D scanning</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            {/*<Container fluid className={"px-0 py-0 mb-0 my-0"}>*/}
            {/*    <Video src='/video/welcomescreen.mp4' className="fullscreen"/>*/}
            {/*</Container>*/}
            <Container fluid style={bgStyles}>
            </Container>
        </HomeLayout>
    )
}

export default IndexPage

export const Head = () => (
    <Seo title={"Daniel Pett, Museologi.st"} description={"A website about Daniel Pett and his work"}/>
)
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "gatsby";
import {
    faFacebook,
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGoogle
} from '@fortawesome/free-brands-svg-icons'
import * as containerStyles from "../styles/footer-style.module.css";

const Footer = () => {
    return (
        <footer className={containerStyles.footer}>
            <Container>
                <Row className="pt-3 h-25">
                    <Col md={4}>
                        <h5>Licensing</h5>
                        <p className="text-white">
                            Words: <a href={'https://creativecommons.org/licenses/by/4.0/'}>CC-BY</a><br/>
                            Images: <a href={'https://creativecommons.org/licenses/by/4.0/'}>CC-BY</a><br/>
                            Code: <a href={'https://opensource.org/licenses/MIT'}>MIT</a><br/>
                            &copy; {new Date().getFullYear()} Daniel Pett
                        </p>
                    </Col>
                    <Col md={2}>
                        <h5>About me</h5>
                        <ul className="text-white">
                            <li>
                                <Link to={'/biography'}>Biography</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <a href="https://www.facebook.com/danielpett/" aria-label="My facebook profile"
                           className="text-white mx-3"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                        <a href="https://www.instagram.com/danielejpett/" className="text-white mx-3"
                           aria-label="My Instagram profile"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                        <a href="https://twitter.com/dejpett" className="text-white mx-3"
                           aria-label="My twitter profile"><FontAwesomeIcon
                            icon={faTwitter} size="2x"/></a>
                        <a href="https://github.com/portableant" className="text-white mx-3"
                           aria-label="My GitHub account profile"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a href="https://linkedin.com/danielpett" className="text-white mx-3"
                           aria-label="My Linkedin account profile"><FontAwesomeIcon icon={faLinkedin}
                                                                                     size="2x"/></a>
                        <a href="https://scholar.google.com/citations?user=39kTD8YAAAAJ&hl=en"
                           className="text-white mx-3"
                           aria-label="My Google Scholar account profile"><FontAwesomeIcon icon={faGoogle}
                                                                                           size="2x"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
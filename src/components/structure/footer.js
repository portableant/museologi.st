import React from "react";
// Import Bootstrap elements
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "gatsby";
import PropTypes from "prop-types";
// Import Font Awesome Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGoogle
} from '@fortawesome/free-brands-svg-icons'

// See https://stackoverflow.com/a/37073268 as to how to add multiple classes
import * as containerStyles from "../../styles/footer-style.module.css";
// Merge the classes together
const classes = `mt-auto ${containerStyles.footer}`

// The Footer takes two sets of link array to produce some menu items - About me and services I can offer.
const Footer = ({aboutLinks}) => {
    return (
        <footer className={classes}>
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
                            {aboutLinks.map(link => (
                                <li key={link.id}>
                                    <Link className="text-white" to={link.link} >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5>Follow me</h5>
                        <a href="src/components/structure/footer" aria-label="My facebook profile"
                           className="text-white mx-2 my-1"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                        <a href="src/components/structure/footer" className="text-white mx-2 my-1"
                           aria-label="My Instagram profile"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                        <a href="https://twitter.com/dejpett" className="text-white mx-2 my-1"
                           aria-label="My twitter profile"><FontAwesomeIcon
                            icon={faTwitter} size="2x"/></a>
                        <a href="https://github.com/portableant" className="text-white mx-2 my-1"
                           aria-label="My GitHub account profile"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a href="https://linkedin.com/danielpett" className="text-white mx-2 my-1"
                           aria-label="My Linkedin account profile"><FontAwesomeIcon icon={faLinkedin}
                                                                                     size="2x"/></a>
                        <a href="https://scholar.google.com/citations?user=39kTD8YAAAAJ&hl=en"
                           className="text-white mx-2 my-1"
                           aria-label="My Google Scholar account profile"><FontAwesomeIcon icon={faGoogle}
                                                                                           size="2x"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};


Footer.propTypes = {
    aboutLinks: PropTypes.array
}

Footer.defaultProps = {
    aboutLinks: ``
}

export default Footer;
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

import Icon from "../../images/orcid.svg";
import SketchfabIcon from "../../images/sketchfab-logo-white.svg";

// See https://stackoverflow.com/a/37073268 as to how to add multiple classes
import * as containerStyles from "../../styles/footer-style.module.css";
// Merge the classes together
const classes = `mt-auto ${containerStyles.footer}`

// The Footer takes two sets of link array to produce some menu items - About me and services I can offer.
const Footer = ({aboutLinks}) => {
    return (
        <>
            <footer className={classes}>
                <Container>
                    <Row className="pt-3 pb-5 h-25">
                        <Col md={4}>
                            <h3>Licensing</h3>
                            <p className="text-white">
                                Words: <a href={'https://creativecommons.org/licenses/by/4.0/'}>CC-BY</a><br/>
                                Images: <a href={'https://creativecommons.org/licenses/by/4.0/'}>CC-BY</a><br/>
                                Code: <a href={'https://opensource.org/licenses/MIT'}>MIT</a><br/>
                                &copy; {new Date().getFullYear()} Daniel Pett
                            </p>
                        </Col>
                        <Col md={2}>
                            <h3>About me</h3>
                            <ul className="text-white">
                                {aboutLinks.map(link => (
                                    <li key={link.id}>
                                        <Link className="text-white" to={link.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3>Follow me</h3>
                            <a href="https://facebook.com/danielpett" aria-label="My facebook profile"
                               className="text-white mx-2 my-1"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                            <a href="https://instagram.com/danielejpett" className="text-white mx-2 my-1"
                               aria-label="My Instagram profile"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                            <a href="https://twitter.com/dejpett" className="text-white mx-2 my-1"
                               aria-label="My twitter profile"><FontAwesomeIcon
                                icon={faTwitter} size="2x"/></a>
                            <a href="https://github.com/portableant" className="text-white mx-2 my-1"
                               aria-label="My GitHub account profile"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                            <a href="https://www.linkedin.com/in/danielpett/" className="text-white mx-2 my-1"
                               aria-label="My Linkedin account profile"><FontAwesomeIcon icon={faLinkedin}
                                                                                         size="2x"/></a>
                            <a href="https://orcid.org/0000-0002-0246-2335" className="text-white mx-2 my-1"
                               aria-label="My ORCID account profile"><Icon  className="svg-inline--fa fa-facebook fa-w-16 fa-2x" style={{ height:32, width: 32 }}/>
                            </a>
                            <a href="https://scholar.google.com/citations?user=39kTD8YAAAAJ&hl=en"
                               className="text-white mx-2 my-1"
                               aria-label="My Google Scholar account profile"><FontAwesomeIcon icon={faGoogle}
                                                                                               size="2x"/></a>
                            <a href="https://sketchfab.com/danielpett" className="text-white mx-2 my-1"
                               aria-label="My ORCID account profile"><SketchfabIcon  className="svg-inline--fa fa-facebook fa-w-16 fa-2x" style={{ height:32, width: 32 }}/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};


Footer.propTypes = {
    aboutLinks: PropTypes.array
}

Footer.defaultProps = {
    aboutLinks: ``
}

export default Footer;
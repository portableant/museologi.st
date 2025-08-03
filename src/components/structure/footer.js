import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faXTwitter,
    faInstagram,
    faLinkedin,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";

// Import SVGs as static assets
import orcidIconSrc from "../../images/orcid.svg";
import sketchfabIconSrc from "../../images/sketchfab-logo-white.svg";

import * as containerStyles from "../../styles/footer-style.module.css";

const classes = `mt-auto ${containerStyles.footer}`;

const iconMap = {
    facebook: faFacebook,
    instagram: faInstagram,
    twitter: faXTwitter,
    github: faGithub,
    linkedin: faLinkedin,
    google: faGoogle,
};

const renderIcon = (name) => {
    if (name === 'orcid') {
        return (
            <img 
                src={orcidIconSrc}
                className="fa-w-16 fa-2x m-2 svg-inline--fa" 
                style={{ height: 32, width: 32 }}
                alt="ORCID"
                aria-hidden="true"
            />
        );
    }
    if (name === 'sketchfab') {
        return (
            <img 
                src={sketchfabIconSrc}
                className="fa-2x m-2 svg-inline--fa" 
                style={{ height: 32, width: 32 }}
                alt="Sketchfab"
                aria-hidden="true"
            />
        );
    }
    if (iconMap[name]) {
        return (
            <FontAwesomeIcon 
                icon={iconMap[name]} 
                size="2x" 
                className="m-2 svg-inline--fa"
                aria-hidden="true"
            />
        );
    }
    return null;
};

const Footer = ({ aboutLinks = [] }) => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    socialLinks {
                        name
                        url
                        label
                    }
                }
            }
        }
    `);

    const { socialLinks } = data.site.siteMetadata;
    const currentYear = new Date().getFullYear();

    return (
        <footer className={classes}>
            <Container>
                <Row className="pt-3 pb-5 h-25">
                    <Col md={4}>
                        <h3>Licensing</h3>
                        <p className="text-white">
                            Words: <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank">CC-BY</a>
                            <br />
                            Images: <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank">CC-BY</a>
                            <br />
                            Code: <a href="https://opensource.org/licenses/MIT" rel="noopener noreferrer" target="_blank">MIT</a>
                            <br />
                            &copy; {currentYear} Daniel Pett
                        </p>
                    </Col>
                    <Col md={2}>
                        <h3>About me</h3>
                        {aboutLinks.length > 0 && (
                            <ul className="text-white">
                                {aboutLinks.map((link) => (
                                    <li key={link.id}>
                                        <Link className="text-white" to={link.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Col>
                    <Col md={6}>
                        <h3>Follow me</h3>
                        {socialLinks.map(({ name, url, label }, idx) => (
                            <a 
                                key={`${name}-${idx}`}
                                href={url} 
                                className="text-white" 
                                aria-label={label}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {renderIcon(name)}
                            </a>
                        ))}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

Footer.propTypes = {
    aboutLinks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ),
};

export default Footer;
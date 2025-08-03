import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const NavBar = ({ siteTitle = "", menuLinks = [] }) => (
    <header style={{ background: "#192036", marginBottom: "3rem" }}>
        <nav
            role="navigation"
            aria-label="Site Navigation"
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            style={{ background: "#192036", marginBottom: "1.45rem" }}
        >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">
                    Daniel Pett - {siteTitle}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {Array.isArray(menuLinks) &&
                            menuLinks.map(({ id, link, name }) => (
                                <li className="nav-item" key={id}>
                                    <Link className="nav-link text-white" to={link}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

NavBar.propTypes = {
    siteTitle: PropTypes.string,
    menuLinks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

export default NavBar;
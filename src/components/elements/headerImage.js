import React from "react";
import { Container } from "react-bootstrap";
import { getSrc } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const HeaderImage = ({ backgroundImage = "" }) => {
    const src = getSrc(backgroundImage);
    if (!src) return null;

    return (
        <Container
            fluid
            style={{
                backgroundImage: `url(${src})`,
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "2rem",
                backgroundRepeat: "no-repeat"
            }}
        />
    );
};

HeaderImage.propTypes = {
    backgroundImage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default HeaderImage;
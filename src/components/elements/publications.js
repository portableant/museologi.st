import React from "react";
import PropTypes from "prop-types";
import * as containerStyles from "../../styles/publications.module.css";

const Publications = ({ publications = [] }) => {
    if (!Array.isArray(publications) || publications.length === 0) return null;

    return (
        <div>
            <h4 className="my-3 p-2">Publications</h4>
            <ul className={containerStyles.publications}>
                {publications.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

Publications.propTypes = {
    publications: PropTypes.arrayOf(PropTypes.node),
};

export default Publications;
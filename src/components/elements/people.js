import React from "react";
import PropTypes from "prop-types";

const ListSection = ({ title, items }) =>
    items && items.length > 0 && (
        <>
            <h4 className="my-2 p-2">{title}</h4>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    );

const Partners = ({ collaborators = [], partners = [] }) => (
    <div>
        <ListSection title="People I worked with" items={collaborators} />
        <ListSection title="Institutional Partners" items={partners} />
    </div>
);

Partners.propTypes = {
    collaborators: PropTypes.array,
    partners: PropTypes.array,
};

export default Partners;

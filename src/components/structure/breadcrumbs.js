// src/components/Breadcrumbs.js
import React from "react";
import { Link } from "gatsby";
import Breadcrumb from "react-bootstrap/Breadcrumb";

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumbs = ({ breadcrumbs }) => {
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <Breadcrumb>
        {breadcrumbs.map((crumb, index) => {
          const label = capitalizeFirstLetter(crumb.crumbLabel.replace(/-/g, " "));
          if (index < breadcrumbs.length - 1) {
            return (
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: crumb.pathname }} key={index}>
                {label}
              </Breadcrumb.Item>
            );
          } else {
            return (
              <Breadcrumb.Item active key={index}>
                {label}
              </Breadcrumb.Item>
            );
          }
        })}
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbs;
import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const FairData = ({
    zenodo_doi = "",
    github_repo = [],
    project_website = "",
    deposited_archive = [],
}) => (
    <div>
        {project_website && (
            <div>
                <p className="p-2">
                    <Button href={project_website} variant="dark" className="text-white">
                        Project website
                    </Button>
                </p>
            </div>
        )}

        {deposited_archive && deposited_archive.length > 0 && (
            <div>
                <h4 className="p-2">Deposited archive</h4>
                <p className="p-2">
                    {deposited_archive.map((item, i) => (
                        <span key={i}>
                            {item.holder}, <a href={item.url}>{item.title}</a> DOI: {item.doi}
                            {i < deposited_archive.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
        )}

        {(zenodo_doi || (github_repo && github_repo.length > 0)) && (
            <div>
                <h4 className="p-2">Data sources</h4>
                <ul>
                    {zenodo_doi && (
                        <li>
                            <a href={`https://doi.org/${zenodo_doi}`}>
                                <Image
                                    alt="DOI Badge"
                                    src={`https://zenodo.org/badge/DOI/${zenodo_doi}.svg`}
                                />
                            </a>
                        </li>
                    )}
                    {github_repo.map((item, i) => (
                        <li key={i}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

FairData.propTypes = {
    zenodo_doi: PropTypes.string,
    github_repo: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    project_website: PropTypes.string,
    deposited_archive: PropTypes.arrayOf(
        PropTypes.shape({
            holder: PropTypes.string,
            url: PropTypes.string,
            title: PropTypes.string,
            doi: PropTypes.string,
        })
    ),
};

export default FairData;
import React from "react"
import PropTypes from "prop-types"
import Image from "react-bootstrap/Image";
import {Link} from "gatsby";

const FairData = ({zenodo_doi, github_repo, project_website, deposited_archive}) => (
    <div>
        {project_website &&  <div>
            <p className="p-2">
                <a href={project_website}>Project website</a>
            </p>
        </div>
        }
        {deposited_archive &&  <div>
            <h4 className="p-2">Deposited archive</h4>
            <p className="p-2">
                {deposited_archive.map((item, i) => (
                    <span key={i}>
                        {item.holder}, <a href={item.url}>{item.title}</a> DOI: {item.doi}
                    </span>
                ))}
            </p>
        </div>
        }

    {(zenodo_doi || github_repo) &&
        <div>
            <h4 className="p-2">Data sources</h4>
            <ul>
                {zenodo_doi && <li><Link to={`https://doi.org/${zenodo_doi}`}><Image alt={'DOI Badge'} src={`https://zenodo.org/badge/DOI/${zenodo_doi}.svg`}></Image></Link>
                </li>}
                {github_repo && <span>
                    {github_repo.map((item, i) => (
                        <li key={i}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                    </span>
                }
            </ul>
        </div>
    }</div>
)

FairData.propTypes = {
    zenodo_doi: PropTypes.string,
    github_repo: PropTypes.array,
    project_website: PropTypes.string,
    deposited_archive: PropTypes.array
}

FairData.defaultProps = {
    zenodo_doi: ``,
    github_repo: ``,
    project_website: ``,
    deposited_archive: ``,
}

export default FairData
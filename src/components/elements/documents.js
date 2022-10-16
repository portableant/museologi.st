import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby";
const Documents = ({documents}) => (
    <div className="Documents">
        {documents && <>
            <h4 className={"my-2 p-2"}>Documents and files</h4>
            <ul className="news">
                {documents.map((item, i) => (
                    <li key={i}>
                        <Link to={item.location}>{item.title}</Link>: {item.type}
                    </li>
                ))}
            </ul>
        </>}
    </div>

)

Documents.propTypes = {
    documents: PropTypes.array
}

Documents.defaultProps = {
    documents: ``,
}

export default Documents
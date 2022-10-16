import React from "react"
import PropTypes from "prop-types"
import * as containerStyles from "../../styles/publications.module.css"
const Publications = ({publications}) => (
    <div>
        {publications && <>
            <h4 className={"my-3 p-2"}>Publications</h4>
        <ul className={containerStyles.publications}>
            {publications.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
        </>}
    </div>

)

Publications.propTypes = {
    publications: PropTypes.array
}

Publications.defaultProps = {
    publications: ``,
}

export default Publications
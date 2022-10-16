import React from "react"
import PropTypes from "prop-types"
const Partners = ({collaborators, partners}) => (
    <div>
        {collaborators && <>
            <h4 className={"my-2 p-2"}>People I worked with</h4>
            <ul className="">
                {collaborators.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </>}
        {partners && <>
            <h4 className={"my-2 p-2"}>Institutional Partners</h4>
            <ul className="">
                {partners.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </>}
    </div>

)

Partners.propTypes = {
    partners: PropTypes.array
}

Partners.defaultProps = {
    partners: ``,
}

export default Partners
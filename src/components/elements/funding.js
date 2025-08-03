import React from "react"
import PropTypes from "prop-types"

const Funding = ({ funders = [], grant_amount = "", grant_number = "" }) => {
    if ((!funders || !funders.length) && !grant_amount && !grant_number) return null

    return (
        <div>
            <h4 className="p-2">Funding</h4>
            <ul>
                {funders && funders.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
                {grant_amount && <li>Grant amount: {grant_amount}</li>}
                {grant_number && <li>Grant number: {grant_number}</li>}
            </ul>
        </div>
    )
}

Funding.propTypes = {
    funders: PropTypes.arrayOf(PropTypes.string),
    grant_amount: PropTypes.string,
    grant_number: PropTypes.string,
}

export default Funding
import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby";
const News = ({news}) => (
    <div className="publications">
        {news && <>
            <h4 className={"my-2 p-2"}>News Articles/ Related links</h4>
            <ul className="news">
                {news.map((item, i) => (
                    <li key={i}>
                        <Link to={item.url}>{item.title}</Link>: {item.medium}
                    </li>
                ))}
            </ul>
        </>}
    </div>

)

News.propTypes = {
    news: PropTypes.array
}

News.defaultProps = {
    news: ``,
}

export default News
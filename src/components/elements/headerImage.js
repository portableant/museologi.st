import React from "react"
import {Container} from "react-bootstrap";
import {getSrc} from "gatsby-plugin-image"
import PropTypes from "prop-types"
const HeaderImage = ({backgroundImage}) => (
    <div>
        {backgroundImage && <Container fluid style={{
            backgroundImage: `url(${getSrc(backgroundImage)})`,
            height: "70vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: "2rem",
            backgroundRepeat: "no-repeat"
        }}></Container>
        }
    </div>
)

HeaderImage.propTypes = {
    backgroundImage: PropTypes.string
}

HeaderImage.defaultProps = {
    backgroundImage: ``,
}

export default HeaderImage

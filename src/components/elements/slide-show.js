import {Carousel} from 'react-bootstrap';
import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image";

const SlideShow = ({images}) => (
    <div className="images-carousel">
        {images && <div>
            <Carousel>
                {images.map((item, i) => (
                    <Carousel.Item key={i}>
                        <GatsbyImage image={item.image.childImageSharp.gatsbyImageData} alt="some alt text"/>
                        <Carousel.Caption className={"d-none d-lg-block"}>
                            <h3>{item.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>))}
            </Carousel>
        </div>
        } </div>
)

SlideShow.propTypes = {
    images: PropTypes.array
}

SlideShow.defaultProps = {
    images: ``,
}
export default SlideShow;
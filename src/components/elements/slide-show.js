import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

const SlideShow = ({ images = [] }) => (
    <div className="images-carousel">
        {images.length > 0 && (
            <Carousel>
                {images.map((item, i) => (
                    <Carousel.Item key={i}>
                        <GatsbyImage
                            image={item.image.childImageSharp.gatsbyImageData}
                            alt={item.caption || "Slide image"}
                        />
                        {item.caption && (
                            <Carousel.Caption className="d-none d-lg-block">
                                <h3>{item.caption}</h3>
                            </Carousel.Caption>
                        )}
                    </Carousel.Item>
                ))}
            </Carousel>
        )}
    </div>
);

SlideShow.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.object.isRequired,
            caption: PropTypes.string,
        })
    ),
};

export default SlideShow;
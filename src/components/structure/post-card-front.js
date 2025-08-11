import React from "react";
import PropTypes from "prop-types";
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle, CardText, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const trimTitle = (title, maxLength = 80, sliceLength = 40) => {
    if (title.length > maxLength) {
        const trimmed = title.slice(0, sliceLength);
        const lastSpace = trimmed.lastIndexOf(" ");
        return trimmed.slice(0, lastSpace) + "...";
    }
    return title;
};

const PostCardFront = ({ post }) => {
    const { featuredImg, title, slug, date } = post.frontmatter;
    const image = getImage(featuredImg);

    return (
        <Col md={4} className="mb-3">
            <Card className="mx-3 border-0">
                {image ? (
                    <CardImg
                        as={GatsbyImage}
                        className="img-fluid rounded-3"
                        variant="top"
                        image={image}
                        alt={title || "Post image"}
                    />
                ) : (
                    <div className="img-fluid rounded-3 bg-secondary" style={{ height: "200px" }} />
                )}
                <CardImgOverlay>
                    <CardBody className="d-flex align-content-end flex-column justify-content-end">
                        <Link to={slug} className="link-light text-decoration-none stretched-link">
                            <CardTitle className="text-white fw-bold display-6 mb-3 mt-0">
                                {trimTitle(title)}
                            </CardTitle>
                        </Link>
                        <CardText className="text-white small">{date}</CardText>
                    </CardBody>
                </CardImgOverlay>
            </Card>
        </Col>
    );
};

PostCardFront.propTypes = {
    post: PropTypes.shape({
        frontmatter: PropTypes.shape({
            featuredImg: PropTypes.object,
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default PostCardFront;
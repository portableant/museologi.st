import React from "react";
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle, CardText, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostCardFront = ({ post }) => {
    const { featuredImg, title, slug, date } = post.frontmatter;
    const image = getImage(featuredImg);

    const trimmedTitle = title.length > 80 ? title.slice(0, 60) + "..." : title;

    return (
        <Col md={4} className="mb-3">
            <Card className="mx-3 border-0">
                <CardImg
                    as={GatsbyImage}
                    className="img-fluid rounded-3"
                    variant="top"
                    image={image}
                    alt={title}
                />
                <CardImgOverlay>
                    <CardBody className="d-flex align-content-end flex-column justify-content-end">
                        <Link to={slug} className="link-light text-decoration-none">
                            <CardTitle className="stretched-link text-white fw-bold display-6 mb-3 mt-0">
                                {trimmedTitle}
                            </CardTitle>
                        </Link>
                        <CardText className="text-white small">{date}</CardText>
                    </CardBody>
                </CardImgOverlay>
            </Card>
        </Col>
    );
};

export default PostCardFront;
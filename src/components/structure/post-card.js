import React from "react";
import { Card, Col, Badge } from "react-bootstrap";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostCard = ({ post }) => {
    const { frontmatter } = post;
    const { featuredImg, title, slug, date, institution } = frontmatter;
    const image = getImage(featuredImg);

    return (
        <Col md={4} className="mb-3">
            <Card className="border-0 bg-light">
                {image && (
                    <GatsbyImage
                        className="card-img-top rounded-3"
                        image={image}
                        alt={title}
                    />
                )}
                <Card.Body className="bg-white border-0 rounded-0">
                    <Link to={slug} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold">{title}</h1>
                    </Link>
                    {date && <h4 className="text-info">{date}</h4>}
                    {institution && (
                        <Badge bg="dark" className="text-white p-2">
                            {institution}
                        </Badge>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PostCard;
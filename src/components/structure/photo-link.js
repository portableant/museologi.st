import React from "react"
import {Card, CardImg, Col} from 'react-bootstrap';
import {Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const PhotoLink = ({post}) => (
    <Col md={4} className="mb-3">
        <Card className="border-0 bg-white">
            <CardImg className="card-img-top rounded-0"
                     as={GatsbyImage} image={getImage(post.frontmatter.featuredImg)} alt="{post.frontmatter.title}"/>
            <Card.Body>
                <Link to={post.frontmatter.slug} className="stretched-link">
                    <h1 className="lead">{post.frontmatter.title}</h1>
                </Link>
                <p>{post.frontmatter.date}</p>
            </Card.Body>
        </Card>
    </Col>
)

export default PhotoLink
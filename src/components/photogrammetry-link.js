import React from "react"
import {Card, CardImg, Col} from 'react-bootstrap';
import {Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PhotogrammetryLink = ({post}) => (
    <Col md={4} className="mb-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
        <Card className="border-0 bg-white">
            <CardImg className="card-img-top rounded-0"
                     as={GatsbyImage} image={getImage(post.frontmatter.featuredImg)} alt={post.frontmatter.title}/>
            <Card.Body>
                <Link to={post.frontmatter.slug} className="stretched-link">
                    <h1 className="lead text-black fw-bold">{post.frontmatter.title}</h1>
                </Link>
            </Card.Body>
        </Card>
    </Col>
)

export default PhotogrammetryLink
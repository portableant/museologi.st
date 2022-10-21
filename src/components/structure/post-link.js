import React from "react"
import {Card, CardImg, Col} from 'react-bootstrap';
import {Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostLink = ({post}) => (
    <Col md={4} className="mb-3 aos-init aos-animate" data-aos-duration="600" data-aos="flip-right" data-aos-delay="0" >
        <Card className="h-100 bg-white border-0 rounded-0">
            <CardImg className="card-img-top rounded-0"
                     as={GatsbyImage} image={getImage(post.frontmatter.featuredImg)} alt={post.frontmatter.title}/>
            <Card.Body>
                <Link to={post.frontmatter.slug} className="stretched-link stretched-link__blog_post">
                    <h1 className="lead fw-bolder text-black">{ post.frontmatter.title }</h1>
                </Link>
                <p className="text-black">{post.frontmatter.date}</p>
            </Card.Body>
        </Card>
    </Col>
)

export default PostLink
import React from "react"
import {Card, CardImg, Col, Badge} from 'react-bootstrap';
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const PostCard = ({post}) => (
    <Col md={4} className="mb-3 aos-init aos-animate" data-aos-duration="500" data-aos="fade-up-right"  data-aos-easing="linear" data-aos-delay="0">
        <Card className="border-0 bg-light">
            <CardImg className="card-img-top rounded-0"
                     as={GatsbyImage} image={getImage(post.frontmatter.featuredImg)} alt={post.frontmatter.title}/>
            <Card.Body className="bg-white border-0 rounded-0">
                <div className="h-100" style={{minHeight: 70}}>
                    <Link to={post.frontmatter.slug} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold">{post.frontmatter.title}</h1>
                    </Link>
                </div>
                {post.frontmatter.institution && <div className="h-100">
                    <Badge bg="primary" className="text-white p-2">{post.frontmatter.institution}</Badge>
                </div>}
            </Card.Body>
        </Card>
    </Col>
)

export default PostCard
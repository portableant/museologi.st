import React from "react"
import {Card, CardImg, Col, Badge} from 'react-bootstrap';
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const PostCard = ({post}) => (
    <Col md={4} className="mb-3">
        <Card className="border-0 bg-light">
            <CardImg className="card-img-top rounded-3"
                     as={GatsbyImage} image={getImage(post.frontmatter.featuredImg)} alt={post.frontmatter.title}/>
            <Card.Body className="bg-white border-0 rounded-0">
                <div >
                    <Link to={post.frontmatter.slug} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold">{post.frontmatter.title}</h1>
                    </Link>
                </div>
                {post.frontmatter.date && <div>
                    <h4 className="text-info">{post.frontmatter.date}</h4>
                </div>}
                {post.frontmatter.institution && <div className="h-100">
                    <Badge bg="dark" className="text-white p-2">{post.frontmatter.institution}</Badge>
                </div>}
            </Card.Body>
        </Card>
    </Col>
)

export default PostCard
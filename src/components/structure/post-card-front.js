import React from "react";
import {Card, CardImg, CardBody, CardImgOverlay, CardTitle, CardText} from "react-bootstrap";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const PostCardFront = ({post}) => (

    <Card className={'mx-3 border-0'}>
        <CardImg className={'img-fluid rounded-3'} variant={'top'} as={GatsbyImage}
                 image={getImage(post.frontmatter.featuredImg)} alt={post.frontmatter.title}/>
        <CardImgOverlay>
            <CardBody className={'d-flex align-content-end'}>
                <Link to={post.frontmatter.slug} className={'link-light text-decoration-none'}><CardTitle
                    className="stretched-link text-white fw-bold display-6 mb-3 mt-0">{post.frontmatter.title}</CardTitle></Link>
                <CardText className="text-white small">{post.frontmatter.date}</CardText>
            </CardBody>
        </CardImgOverlay>
    </Card>
);

export default PostCardFront;
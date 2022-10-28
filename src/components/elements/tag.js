import React from "react"
import {kebabCase, startCase} from "lodash";
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "gatsby";

const Tags = ({tags}) => (
    <Container fluid className={"bg-pastel"}>
        <Container>
            <Row>
                {tags && <Col md={12} className="px-4 mb-2">
                    {tags.map((item, i) => (
                        <Link to={`/tags/${kebabCase(item)}/`} className="btn btn-dark mx-1 my-1 p-2 text-white"
                              key={i}>{startCase(item)}</Link>
                    ))}
                </Col>}
            </Row>
        </Container>
    </Container>

)

Tags.propTypes = {
    tags: PropTypes.array
}

Tags.defaultProps = {
    tags: ``,
}

export default Tags;

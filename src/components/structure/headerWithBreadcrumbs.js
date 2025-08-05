import React from "react";
import Breadcrumbs from "../structure/breadcrumbs";
import { Container, Row, Col, Badge } from "react-bootstrap";

const HeaderWithBreadcrumbs = ({
    breadcrumbs,
    title,
    date,
    readingTime,
    citation,
    authors,
    role,
    institution,
    children,
}) => {
    return (
        <Container className="mt-2 pt-2">
            <Container fluid>
                <Row className="mt-3">
                    <Col>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-primary fw-bold">{title}</h1>
                    </Col>
                </Row>
                {date && (
                    <Row>
                        <Col>
                            <div className="text-primary small mb-2">
                                <time dateTime={date}>{date}</time>
                            </div>
                        </Col>
                    </Row>
                )}
                {authors && (
                    <Row>
                        <Col>
                            <div className="text-secondary text-danger small mb-1">
                                {Array.isArray(authors) ? authors.join(", ") : authors}
                            </div>
                        </Col>
                    </Row>
                )}
                {citation && (
                    <Row>
                        <Col>
                            <div>
                                <p className="text-dark small mb-2">Cite as: {citation}</p>
                            </div>
                        </Col>
                    </Row>
                )}
                {role && (
                    <Row>
                        <Col>
                            <Badge className="bg-dark p-2 my-1 mx-1" as="span">
                                Role(s): {role}
                            </Badge>
                        </Col>
                    </Row>
                )}
                {institution && (
                    <Row>
                        <Col>
                            <Badge className="bg-dark p-2 my-1 mx-1" as="span">
                                {institution}
                            </Badge>
                        </Col>
                    </Row>
                )}
                {readingTime && (
                    <Row>
                        <Col>
                            <div className="text-primary lead small">{readingTime}</div>
                        </Col>
                    </Row>
                )}
                {children && (
                    <Row>
                        <Col>{children}</Col>
                    </Row>
                )}
            </Container>
        </Container>
    );
};

export default HeaderWithBreadcrumbs;

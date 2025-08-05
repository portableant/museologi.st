import React from 'react'
import PropTypes from "prop-types";
import {Link} from "gatsby";
import {Container, Button} from "react-bootstrap";

const Pagination = ({ pageContext }) => {
    const { pageNumber, numberOfPages, humanPageNumber, previousPagePath, nextPagePath } = pageContext;
    
    return (
        <Container fluid className="mx-auto text-center bg-pastel">
        <Container>
            <nav className="pagination py-2 d-flex justify-content-between align-items-center" role="navigation" aria-label="Pagination Navigation">
                {humanPageNumber > 1 ? (
                    <Button variant="dark" as={Link} to={previousPagePath} title="Go to previous page" aria-label="Go to previous page">
                        ← Previous
                    </Button>
                ) : (
                    <div />
                )}
                
                <span className="fw-bold">Page {pageNumber + 1} of {numberOfPages}</span>
                
                {humanPageNumber < numberOfPages ? (
                    <Button variant="dark" as={Link} to={nextPagePath} title="Go to next page" aria-label="Go to next page">
                        Next →
                    </Button>
                ) : (
                    <div />
                )}
            </nav>
        </Container>
    </Container>
    );
};

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
};

export default Pagination;
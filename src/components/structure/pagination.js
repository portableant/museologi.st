import React from 'react'
import PropType from "prop-types";
import {Link} from "gatsby";
import {Container} from "react-bootstrap";

export default function Pagination(props) {

    const {pageContext} = props;
    const {pageNumber, numberOfPages, humanPageNumber, previousPagePath, nextPagePath} = pageContext;
    return (
            <Container>
                <nav className="pagination py-2">
                    {humanPageNumber > 1 ? (
                            <Link
                                title="Go to previous page"
                                to={previousPagePath}>
                                ← Previous
                            </Link>) :
                        <span/>}
                    <strong>Page {pageNumber + 1} of {numberOfPages}</strong>
                    {humanPageNumber < numberOfPages ? (
                            <Link
                                title="Go to next page"
                                to={nextPagePath}>
                                Next →
                            </Link>) :
                        <span/>}
                </nav>
            </Container>
    )

}


Pagination.propType = {
    pageContext: PropType.object.isRequired,
}
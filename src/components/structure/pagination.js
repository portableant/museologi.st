import React from 'react'
import PropType from "prop-types";
import {Link} from "gatsby";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Pagination(props) {

    const {pageContext} = props;
    const {pageNumber, numberOfPages, humanPageNumber, previousPagePath, nextPagePath} = pageContext;
    return (
            <Container>
                <nav className="pagination py-2" role="navigation" aria-label="Pagination Navigation">
                    {humanPageNumber > 1 ? (
                            <Button variant={'dark'}><Link
                                title="Go to previous page"
                                to={previousPagePath}
                                aria-label="Go to previous page">
                                ← Previous
                            </Link></Button>) :
                        <span/>}
                    <span className={'fw-bolder'}>Page {pageNumber + 1} of {numberOfPages}</span>
                    {humanPageNumber < numberOfPages ? (
                            <Button variant={'dark'}><Link
                                title="Go to next page"
                                aria-label="Go to next page"
                                to={nextPagePath}>
                                Next →
                            </Link></Button>) :
                        <span/>}
                </nav>
            </Container>
    )

}


Pagination.propType = {
    pageContext: PropType.object.isRequired,
}
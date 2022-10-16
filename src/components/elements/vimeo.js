import React from "react"
import PropTypes from "prop-types"
import {Container, Row} from "react-bootstrap";

const Vimeo = ({vimeo}) => (
    <div>
        {vimeo && <>
            <Container>
                <Row>
                    <>
                    {vimeo.map((item, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="ratio ratio-16x9 my-2">
                                <iframe title={item} src={'https://player.vimeo.com/video/' + item} ></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                            </div>
                        </div>
                        ))}
                    </>
                </Row>
            </Container>
        </>}
    </div>

)

Vimeo.propTypes = {
    vimeo: PropTypes.array
}

Vimeo.defaultProps = {
    vimeo: ``,
}

export default Vimeo
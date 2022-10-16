import React, { useEffect } from 'react';
import PropTypes from "prop-types"
import Plyr from "plyr-react"

import {Container, Row, Col} from "react-bootstrap";

const PlyrAudio = ({audio}) => (
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            const Plyr = require('plyr');
            Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));
        }
    }, [videos]));
return (
<div>
        {audio && <>
            <Container fluid className="bg-pastel p-3">
                <Container>
                    <h3>Audio files</h3>
                    <p>These are all CC-BY licensed.</p>
                    <Row>
                    {audio.map((item, i) => (
                        <>
                            <Col md={6} className="mb-3">
                            <Plyr key={i} source={
                                {
                                    type: 'audio',
                                    title: item.title,
                                    sources: [
                                        {
                                            src: item.location,
                                            type: item.type
                                        }
                                    ]
                                }}
                                  options={{
                                      hideControls: true,
                                      controls: ['play', 'progress', 'current-time', 'volume', 'download', 'airplay'],
                                      settings: true,
                                  }}

                            />
                            <p className="text-dark text-center mt-2">{item.title} - {item.author}  ({item.project})</p>
                            </Col>
                        </>
                    ))}
                    </Row>
                </Container>
            </Container>
        </>}
    </div>

)

PlyrAudio.propTypes = {
    audio: PropTypes.array
}

PlyrAudio.defaultProps = {
    audio: ``,
}

export default PlyrAudio
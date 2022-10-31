import React from 'react';
import { withPrefix } from 'gatsby';

const Video = ({ src }) => {
    return (
        <video
            autoPlay
            muted
            loop
            style={{
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
// /                zIndex: '-1',
                objectFit: 'cover',
                objectPosition: 'center',
                // position: 'fixed'
            }}
            src={withPrefix(src)}
        >
            <source src={withPrefix(src)} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
    )
}

export default  Video
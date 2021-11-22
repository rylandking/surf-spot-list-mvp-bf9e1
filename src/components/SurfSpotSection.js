import * as React from 'react';

export default function SurfSpotSection({ annotationPrefix, titleContraction }) {
    return (
        <div data-sb-field-path={annotationPrefix}>
            <p>{titleContraction} surf is an intermediate right reef break.</p>
        </div >
    )
}
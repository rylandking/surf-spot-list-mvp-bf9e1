import * as React from 'react';

export default function SurfSpotSection({ annotationPrefix, title }) {
    return (
        <div data-sb-field-path={annotationPrefix}>
            <p data-sb-field-path=".title">{title}</p>
        </div >
    )
}
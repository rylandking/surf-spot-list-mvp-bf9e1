import * as React from 'react';

export default function SurfSpotSection({ body }) {
    return (
        <div data-sb-field-path={annotationPrefix}>
            <p data-sb-field-path=".body">{body}</p>
        </div>
    )
}
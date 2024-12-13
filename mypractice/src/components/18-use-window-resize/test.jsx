
import React from 'react';
import UseWindowResize from './index.jsx';

export default function Test() {
    const windowSize = UseWindowResize();
    const { width, height } = windowSize;

    return (
        <div>
            <h1>Width: {width}</h1>
            <h1>Height: {height}</h1>
        </div>
    );
}
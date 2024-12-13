import React, { useEffect, useState, useRef } from 'react';
import { use } from 'react';
import UseOutsideClick from './main';

export default function UseOutsideClickTest() {
    const [showContent, setShowContent] = useState(false);

    const ref = useRef();
    UseOutsideClick(ref, () => setShowContent(false));
    return <div>
        {
            showContent ? 
            <div ref={ref}>
                <h1>Click outside to close</h1> 
                <p>Click to show</p>
            </div> :
            <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>

}
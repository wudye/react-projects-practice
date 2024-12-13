
import React , {useEffect} from 'react';

export default function ScrollParticularSection() {
    const useRef = React.useRef();

    const data = [
        {
            label: 'Section 1',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Section 2',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Section 3',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Section 4',
            style: {
                width: '100%',
                height: '600px',
                background: 'yellow'
            }
        },

    
    ];
    function handelScroll() {
        
        let pos = useRef.current.getBoundingClientRect().top;
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });
    }

    return <div>
        <button onClick = {handelScroll}>Scroll</button>
        {
         
            data.map((section, index) => 
            (<div ref={index === 3? useRef : null} style={section.style} key={index}>
                <h1>{section.label}</h1>
                </div>))
        }
    </div>
}
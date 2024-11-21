import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import {useEffect, useState} from 'react'



export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    function randomUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleCreateRandomHexColor() {
        //6785BF
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomUtility(hex.length)];

            
        }
        setColor(hexColor)
    }
    function handleCreateRandomRgbColor() {
        const r = randomUtility(256);
        const g = randomUtility(256);
        const b = randomUtility(256);
        setColor(`rgb(${r},${g},${b})`);

    }
    useEffect(() => {
        if (typeOfColor === 'hex') {
            handleCreateRandomHexColor();
    } else {
        handleCreateRandomRgbColor();
    }
    }, [typeOfColor]) 
    // typeOfColor change first
  return (
    <div  style={{
        textAlign: 'center',

        backgroundColor: color,
        width: "100vw",
        height: "100vh"
    }}>
        <button onClick={() => setTypeOfColor('hex')}>generate HEX color</button>
        <button onClick={() => setTypeOfColor('rgb')}>generate RGB color</button>
        <button onClick={typeOfColor==='hex'? handleCreateRandomHexColor : handleCreateRandomRgbColor}>generate Random color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize:'60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}



import {useState} from 'react';
import QRCode from "react-qr-code";


export default function QrCode() {
    const [qrCode, setQrCode] = useState('');
    const [input , setInput] = useState('');
    function handleQrCode() {
        setQrCode(input);
        setInput('');
    }
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>QR code generator</h1>
        <div>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" 
            value={input}
            placeholder="enter your value" />
            <button disabled={input && input.trim() !=="" ? false : true} onClick={handleQrCode}>generator</button>
        </div>
        <div>
            <QRCode id="qrcode-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
    </div>


}
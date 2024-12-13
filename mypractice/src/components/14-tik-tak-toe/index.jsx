import './styles.css'
import React, {useState, useEffect} from 'react'

export default function TikTakToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const[isXTurn, setIsXTurn] = useState(true);
    const[status, setStatus] = useState('');

    function handleClick(index) {
        let cpySquares = [...squares];
        if(checkWin(cpySquares) || cpySquares[index] !== '') return;
        cpySquares[index] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    
    }
    
    function checkWin(squares) {
    
        const winnigCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0;  i < winnigCombination.length; i++) {
            const [a, b, c] = winnigCombination[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    useEffect(() => {
        if( !checkWin(squares) && squares.every(item => item !== '')) {
            setSquares("finnish");
        }
        else if (checkWin(squares)) {
            setStatus(`winner is ${checkWin(squares)}`);
        } else {
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`);
        }
    }, [squares, isXTurn]) 

    function Square({value, onClick}) {
        return <button onClick={onClick} className="square">{value}</button>
    }
    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(''));
    }
    return (
        <div className="tik-tak-toe-container">
            <div className="row">
                <Square  value={squares[0]} onClick={(e) =>handleClick(0)}/>                
                <Square value={squares[1]} onClick={(e) =>handleClick(1)}/>                
                <Square onClick={(e) =>handleClick(2)} value={squares[2]}/>
            </div>
            <div  className="row">
                <Square onClick={(e) =>handleClick(3)} value={squares[3]}/>                
                <Square onClick={(e) =>handleClick(4)} value={squares[4]}/>                
                <Square onClick={(e) =>handleClick(5)} value={squares[5]}/>
            </div>
            <div  className="row">
                <Square onClick={(e) =>handleClick(6)} value={squares[6]}/>                
                <Square onClick={(e) =>handleClick(7)} value={squares[7]}/>                
                <Square onClick={(e) =>handleClick(8)} value={squares[8]}/>
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}
import React, { useState } from 'react'
import data from './data';
import "./styles.css"

export default function Accordion() {

    const  [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelect, setMulti] = useState([]);

    function handleSingleSelection(getCurrrentId) {
        setSelected(getCurrrentId === selected ? null :getCurrrentId);
        
    }

    function handleMultiSelection(getCurrrentId) {
        let cpyMultiple = [...multiSelect];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrrentId);
        if (findIndexOfCurrentId === -1) {
            
            cpyMultiple.push(getCurrrentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMulti(cpyMultiple);
        console.log(findIndexOfCurrentId);
        
    }
    return (
        <div className='wrapper'>

            {/*start vvalue is false, each click set true or false*/}
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>enable multi selcection</button>
         <div className='accordian'> 
        {
            data && data.length> 0 ? 
            data.map((item) => (
                <div className='item' key={item.id} >
                    {/*this button will intriger it show multiple or single selection*/}
                    <div onClick={
                        enableMultiSelection ? ()=>handleMultiSelection(item.id):()=>handleSingleSelection(item.id)} className='title' >
                        <h3  >{item.question}</h3>
                        <span>+</span>
                    </div>
                    {/*after intriger mutlple or single */}
                    {
                        selected === item.id || multiSelect.indexOf(item.id) !== -1
                        ? (<div className='content'>{item.answer}</div>) : null
                    }
                </div>))
            : (<div>No data found
            </div>)
        }
       
    </div>
    </div>)
}
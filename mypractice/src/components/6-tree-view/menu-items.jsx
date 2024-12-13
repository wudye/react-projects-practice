import MenuLists from "./menu-lists";
import { useState } from "react";
import {FaMinus, FaPlus} from 'react-icons/fa';

export default function MenuItems({item}) {
    const [displayCurrentChildren, setDisplayChildren] = useState({});
    function handleToggleChildren(label) {
        
        setDisplayChildren({...displayCurrentChildren,
            [label]: !displayCurrentChildren[label]
        })
    }
    console.log(displayCurrentChildren);
    return <li >
        <div className="item-container">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ?
                <span onClick={() => handleToggleChildren(item.label)}>
                     {
                    displayCurrentChildren[item.label]?
                    <FaMinus color="#fff" size={25}></FaMinus> :<FaPlus color="#fff" size={25}></FaPlus>    
                }
                </span> : null
               
            }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]?
            <MenuLists list={item.children}></MenuLists> : null
        }
    </li>
    
}
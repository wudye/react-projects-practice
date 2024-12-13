import MenuItems from "./menu-items";
import './style.css'
export default function MenuLists({list=[]}) {
    return <ul className="menu-list-container">
        {
            list && list.length ?
            list.map((listItem, index) => <MenuItems key={index} item={listItem}/>
            ) : null
        }
    </ul>
}
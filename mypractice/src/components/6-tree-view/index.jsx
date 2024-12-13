import MenuLists from "./menu-lists";



export default function TreeView({menus=[]}) {
 
    return (
        <div className="tree-view-container">
            <MenuLists list={menus}></MenuLists>
        </div>
    )
}
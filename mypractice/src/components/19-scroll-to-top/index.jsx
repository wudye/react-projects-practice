
import React from "react";
import useFetch from "../16-useFetch/index.jsx";


export default function ScrollToTop() {
    const bottomRef = React.useRef(null);

    const {data, error,loading} = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
       );
       if (error) {
              console.log(error);
              return <h1>{error.message}</h1>;
         }

    function handleScrollToTop() {
        window.scrollTo(
            {top:0,
            left:0,
            behavior:'smooth'});
    }
    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behavior:'smooth'});
    }
    return <div>
        <h1>ScrollToTop</h1>
        <h3>Scroll to top of the page</h3>
        <button onClick={handleScrollToBottom}>Scroll to bottom</button>
        <ul style={{listStyle: 'none'}}>
            {
                data && data.products && data.products.length ?
                data.products.map((product, index) =>
                    <li key={index}>{product.title}</li>):null
            }

        </ul>
        <button onClick={handleScrollToTop}>Scroll to top</button>
        <div ref={bottomRef}>

        </div>
        <h3>Scroll to bottom of the page</h3>
    </div>;
}
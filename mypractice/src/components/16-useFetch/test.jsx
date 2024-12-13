
import React from "react";
import useFetch from "./index";

export default function UseFetchTest() {
   const {data, error,loading} = useFetch(
    "https://dummyjson.com/products",
    {}
   );
   console.log(data, error, loading);
   return <div>

        <h1>UseFetch Test</h1>
        {
            loading ? <h1>loading...</h1> : null

        }
        {
            error ? <h1>{error.message}</h1> : null
        }
        {
            data && data.products && data.products.length ?
            data.products.map((product, index) => 
            <p key={product.key}>{product.title}</p> ):null
        }

    </div>
}
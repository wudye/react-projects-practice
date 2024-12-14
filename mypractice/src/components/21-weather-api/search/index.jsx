
import "./style.css";
export default function Search({search,setSearch, handleSearch}) {
    return( <div className="search-engine">	
        <input type="text" placeholder="Enter city name" 
         className="city-search"
         name="search"
         value={search}
         onChange={e=>setSearch(e.target.value)}
         />
         <button className="search-button"
         onClick={handleSearch}>search-wather</button>


        </div>)
}
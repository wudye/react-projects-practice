import { useState, useEffect } from "react";
import Suggest from "./suggest";


export default function SearchAuto() {

    const [loading , setLoading] = useState(false);
    const[users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    async function fetchUserData() {
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();
            if (data && data.users && data.users.length > 0) {
                setUsers(data.users.map((user, id) => user.firstName));
                setLoading(false);
                setError(null);
            }
            
        } catch (error) {
            setError(error.message);
            
        }

    }
    function change(e) {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);
        if (query.length > 0){
            const filterdData = users && users.length ?
            users.filter((user) => user.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filterdData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
            console.log('showDropdown', showDropdown);
        }
    }
    useEffect(() => {
        fetchUserData();
    }, []);

    function handleClicke(e) {
        console.log(e.target.innerText);
        setShowDropdown(false);
        setSearchTerm(e.target.innerText);
        setFilteredUsers([]);
    };

    return (
        <div className="search-auto">
            {loading ? <h1>Loading...</h1> : null}
            <input name="search-users" 
            className="search-users"
            value={searchTerm}
            placeholder="Search users" type="text" 
            onChange={change}
            />
            {

                showDropdown && <Suggest handleClick={handleClicke} data={filteredUsers} />
            }
        </div>
    )
}
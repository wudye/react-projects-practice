import {useState, useEffect } from "react";
import "./styles.css";
import Card from "./card.jsx";

export default function GithubProfile() {

    const [userName, setUername] = useState('mudye');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithunProfile() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data){
            setUserData(data);
            setLoading(false);
        }
    }
    function handleSubmit() {
        
        fetchGithunProfile();
    }
    useEffect(() => {
        fetchGithunProfile();
    },[]);
    if (loading){
        return <h1>Loading..... wait</h1>
    }
    return(
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input name="searchByUsername" type="text" 
                placeholder="Search by username"  value={userName}
                onChange={(e) => setUername(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>

            </div>
            {
                userData !== null ? <Card user={userData} /> : <h1>No user found</h1> 
            }

        </div>
    )
}

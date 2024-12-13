import useLocalStorage from "../8-switch-theme/useLocalStorage";
import { useState } from "react";
import "./styles.css";
export default function LightDarkMode() {
    
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    function handleToggleTheme() {
        
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme);
    return <div className="light-dark-mode" data-theme={theme}>

        <div className="container">
            <p>hello world</p>
            <button onClick={handleToggleTheme}>change theme</button>
        </div>
    </div>
}
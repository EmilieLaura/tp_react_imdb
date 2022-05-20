import React, {useContext} from 'react';
import {ThemeContext} from '../../Context/ThemeContext';
import './BtnDarkMode.css';

export default function BtnDarkMode() {
    const {toggleTheme, theme} = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className={theme ? "darkmode" : "darkmode dark-btn"}>
            {theme ? "Mode clair" : "Mode sombre"}
        </button>
    )
}
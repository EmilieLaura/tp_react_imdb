import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul className="liste">
                <li className="items">
                    <Link to="/">Accueil</Link>
                </li>

                <li className="items">
                    <Link to="/films">Films</Link>
                </li>

                <li className="items">
                    <Link to="/series">Séries</Link>
                </li>

                <li className="items">
                    <Link to="/login">S'identifier</Link>
                </li>

                <li className="items">
                    <Link to="/register">S'inscrire</Link>
                </li>
            </ul>
        </nav>
    )
}
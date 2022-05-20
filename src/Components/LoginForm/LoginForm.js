import React from 'react';
import './LoginForm.css';

export default function LoginForm() {
    return(
        <>
            <div className="container">
                <h1 className="title-page">Ravis de vous revoir</h1>

                <form className="container-form">
                    <label htmlFor="title">Votre identifiant</label>
                    <input type="text" id="identifiant" placeholder="Votre identifiant"/>

                    <label htmlFor="title">Votre mot de passe</label>
                    <input type="text" id="mdp" placeholder="Votre mot de passe"/>

                    <button>Se connecter</button>
                </form>
            </div>

        </>
    )
}
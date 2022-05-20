import React from 'react';
import './RegisterForm.css';

export default function RegisterForm() {
    return(
        <>
            <div className="container">
                <h1 className="title-page">Bienvenue sur IMDB</h1>

                <form className="container-form">
                    <label htmlFor="title">Votre email</label>
                    <input type="text" id="email" placeholder="Votre email"/>

                    <label htmlFor="title">Votre identifiant</label>
                    <input type="text" id="pseudo" placeholder="Votre prénom"/>

                    <label htmlFor="title">Votre mot de passe</label>
                    <input type="text" id="mdp" placeholder="Votre mot de passe"/>

                    <button>Créer mon compte</button>
                </form>
            </div>

        </>
    )
}
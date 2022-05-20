import React, {useContext, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFilms} from '../../redux/films/filmReducer';
import './Home.css';
import Card from '../../Components/Card/Card';
import BtnDarkMode from "../../Components/BtnDarkMode/BtnDarkMode";
import {ThemeContext} from "../../Context/ThemeContext";

export default function Home() {
    const {theme} = useContext(ThemeContext);
    // console.log(theme);

    const {films} = useSelector(state => ({
        ...state.filmReducer
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if(films.length === 0) {
            dispatch(getFilms());
        }
    }, []);


    return (
        <>
            <BtnDarkMode/>

            <div className="container">
                <h1 className="title-page"> Le meilleur du cinéma</h1>

                <div className="container-cards">
                    {films.map(item => {
                        return(
                            <Card key={item.id}>
                                <img src={item.coverImage} alt="..."/>

                                <div>
                                    <p>la note des abonnés</p>
                                    <h2>{item.title}</h2>
                                    <p>{item.synopsis}</p>
                                </div>

                                <a href="#">Voir la bande annonce</a>
                            </Card>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
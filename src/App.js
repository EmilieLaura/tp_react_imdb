import './App.css';
import {useEffect, useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import ThemeContextProvider from "./Context/ThemeContext";
import {Routes, Route} from 'react-router-dom';
import Films from "./Containers/Films/Films";
import Series from "./Containers/Series/Series";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";

export default function App() {
  const [filmList, setFilmList] = useState();

  useEffect(() => {
    fetch('http://localhost:2345')
        .then(response => response.json())
        .then(data => {
          setFilmList(data)
            console.log(data)
        })
  }, [])

  return (
      <>
          <Navbar/>

          <ThemeContextProvider>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/films" element={<Films/>}/>
                  <Route path="/series" element={<Series/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
              </Routes>
          </ThemeContextProvider>
      </>
  );
}

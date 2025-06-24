import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PeoplesPage from './Pages/PeoplesPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MovieDetailsPage from './Pages/MovieDetailsPage';

function App() {
 
  return (
    <>
    {/* Système de routing */}
    <BrowserRouter>
      <NavBar/>
    {/* Définition des routes */}
    {/* pour la route / j'affiche mon titre HomePgae */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* Pour la route /peoples j'affiche mon titre PeoplePage */}
        <Route path='/peoples' element={<PeoplesPage/>}/>
        {/* Pour la route /details/:id j'affiche mon titre MovieDetailPage */}
        {/* :id est un paramètre dynamique qui peut être utilisé pour afficher les détails d'un film spécifique */}
        <Route path='/details/:id' element={<MovieDetailsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

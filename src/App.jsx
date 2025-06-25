import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PeoplePage from './Pages/PeoplePage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import PeopleDetailsPage from './Pages/peopleDetailsPage';
import './styles/homePage.css';
import './styles/peoplePage.css';


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
        {/* Pour la route /people j'affiche mon titre PeoplePage */}
        <Route path='/people' element={<PeoplePage/>}/>
        {/* Pour la route /details/:id j'affiche mon titre MovieDetailPage */}
        {/* :id est un paramètre dynamique qui peut être utilisé pour afficher les détails d'un film spécifique */}
        <Route path='/details/:id' element={<MovieDetailsPage/>}/>
        {/* Pour la route /details/people/:id j'affiche mon titre PeopleDetailPage */}
        {/* :id est un paramètre dynamique qui peut être utilisé pour afficher les détails d'un acteur.ice spécifique */}
        <Route path='/details/people/:id' element ={<PeopleDetailsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

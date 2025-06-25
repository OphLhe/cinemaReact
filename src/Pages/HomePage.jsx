import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

const HomePage = () => {
    
    const[movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [search, setSearch] = useState("");

    const fetchMovies = async () => {
        try {
            // si search est vide on affiche la page:
            if(search === ""){
                const response = await axios.get(` https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=${page}&include_adult=false`, {
                    headers:{
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
                    }
                });
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            }else {  
                // si search n'est pas vide on a une recherche, on affiche les resultats de recherche
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=fr-FR&query=${search}&page=${page}&include_adult=false`, {
                    headers:{ 
                    Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"       
                    }
                }); 
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } 
        }catch (error) {
            console.error("Error fetching movies:",error);
        }
    }

    useEffect( () => {
        fetchMovies();
    }, [page, search]);

    // fonction pour gérer le changement de la barre de recherche
    // on utilise le useState pour mettre à jour la valeur de la recherche
    const handleSearchChange = (e) =>{
        setSearch(e.target.value);
        console.log(e.target.value);
        setPage(1);
    }

    return <div className='d-flex flex-column align-items-center justify-content-center m-4'>
        <h1>HomePage</h1>

        <input 
            type="text"
            className="searchBar form-control col-8" 
            placeholder="Recherche un film"
            value={search}
            // onChange est un évènement qui se déclenche à chaque fois que l'utilisateur tape quelque chose dans la barre de recherche
            //  on utilise la fonction handleSearchChange pour mettre à jour la valeur de la recherche
            onChange={handleSearchChange}
        />

        <div className='pageButton d-flex justify-content-between align-items-center m-4'>
            <button className='previousButton btn btn-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span className="pagination">Page {page} sur {totalPages}</span>
            <button className='nextButton btn btn-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>

        <div className='d-flex flex-wrap justify-content-around align-content-center gap-5 col-8'>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movieC={movie} />
            })}
        </div>

        <div className='pageButton d-flex justify-content-between align-items-center mt-4' >
            <button className='previousButton btn btn-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span className="pagination">Page {page} sur {totalPages}</span>
            <button className='nextButton btn btn-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>
        
    </div>;
}
 
export default HomePage;
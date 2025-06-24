import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

const HomePage = () => {
    
    const[movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?language=fr-FR", {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        });
        setMovies(response.data.results);
        console.log(response.data.results);
        
               
        } catch (error) {
            console.error("Error fetching movies:",error);
        }
    }

    useEffect( () => {
        fetchMovies();
    }, []);

    return <div className="d-flex flex-column justify-content-center align-items-center">
        
    <h1>Home Page</h1>

    <div className="d-flex flex-wrap justify-content-around align-content-center gap-5 col-8">
        {movies.map((movie) => {
            return <MovieCard key={movie.id} movieC={movie}/>
        })}
    </div>
    </div>;
}
 
export default HomePage;
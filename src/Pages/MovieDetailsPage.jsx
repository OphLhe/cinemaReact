import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {

    const [movieDetails, setMovieDetails] = useState([]);
    
    const {id} = useParams(); 

    const fecthMovieDetails = async () => {
        
        try {
            const response = await axios.get(` https://api.themoviedb.org/3/movie/${id}?language=fr-FR `, {
                headers:{
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q" 
                }
            });
            setMovieDetails(response.data);
            console.log(response.data);
        } 
        catch (error) {
            console.log("Erreur fetching movie details:", error);  
        }
    }
    
    useEffect(() => {
        fecthMovieDetails();
    }, []);

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>Movie Detail Page</h1>
            <div className='card' style={{ width: '48rem' }}>
                <img src={"https://image.tmdb.org/t/p/original" + movieDetails.poster_path} className="card-img-top" alt={movieDetails.title} />
                <div className='card-body'>
                    <h5 className='card-title'>{movieDetails.title}</h5>
                    <p className='card-text'>{movieDetails.overview}</p>
                    <p className='card-text'>Release Date: {movieDetails.release_date}</p>
                    <p className='card-text'>Rating: {movieDetails.vote_average}</p>
                </div>
            </div>
        </div>
    );
}
 
export default MovieDetailsPage ;


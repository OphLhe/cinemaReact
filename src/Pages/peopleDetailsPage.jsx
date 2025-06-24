import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeopleDetailsPage = () => {
    
    const [peopleDetails, setPeopleDetails] =  useState([]);

    const {id} = useParams();

    const fecthPeopleDetails = async () => {

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?language=fr-FR `, {
             headers:{
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q" 
                }
            });
            setPeopleDetails(response.data)
            console.log(response.data);
        }
        catch (error) {
            console.log("Erreur fetching movie details:", error);      
        }
    }

    useEffect(() => {
        fecthPeopleDetails();
    }, []);
    
    return(
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>People Detail Page</h1>
            <div className='card' style={{ width: '48rem' }}>
                <img src={"https://image.tmdb.org/t/p/original" + peopleDetails.profile_path} className="card-img-top" alt={peopleDetails.name} />
                <div className='card-body'>
                    <h5 className='card-title'>{peopleDetails.name}</h5>
                    <p className='card-text'>{peopleDetails.also_known_as}</p>
                    <p className='card-text'>{peopleDetails.birthday}</p>
                    <p className='card-text'>{peopleDetails.place_of_birth}</p>
                    <p className='card-text'>Rating: {peopleDetails.popularity}</p>
                </div>
            </div>
        </div>
    )
}
 
export default PeopleDetailsPage;
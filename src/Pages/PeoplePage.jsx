import { useEffect, useState } from "react";
import PeopleCard from "../Components/PeopleCard";
import axios from "axios";;

const PeoplePage = () => {

    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [search , setSearch] = useState("");
 
    const fetchPeople = async () => {
        try {
            // si search est vide on affiche la page : 
            if(search === ""){
                const response = await axios.get(`https://api.themoviedb.org/3/person/popular?language=fr-FR&page=${page}&include_adult=false`, {
                    headers:{
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
                    }
                });
                setPeople(response.data.results)
                setTotalPages(response.data.total_pages); 
            } else {
                // si search n'est pas vide on a une recherche, on affiche les resultats de recherche 
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?language=fr-FR&query=${search}&page=${page}&include_adult=false` , {
                    headers:{
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
                    }
                })
                setPeople(response.data.results);
                setTotalPages(response.data.total_pages);
            }
        }catch (error) {
            console.error("Error fetching people:", error);     
        }
    }

    useEffect( () => {
        fetchPeople();
    }, [page, search]);

    // fonction pour gérer le changement de la barre de recherche
    // on utilise le useState pour mettre à jour la valeur de la recherche
    const handleSearchChange = (e) =>{
        setSearch(e.target.value);
        console.log(e.target.value);
        setPage(1);
    }

    return <div className="d-flex flex-column justify-content-center align-items-center">
    <h1>People Page</h1>

        <input 
            type="text"
            className="searchBar form-control col-8" 
            placeholder="Recherche un film"
            value={search}
            // onChange est un évènement qui se déclenche à chaque fois que l'utilisateur tape quelque chose dans la barre de recherche
            // on utilise la fonction handleSearchChange pour mettre à jour la valeur de la recherche
            onChange={handleSearchChange}
        />

        <div className='pageButton d-flex justify-content-between align-items-center m-4'>
            <button className='previousButton btn btn-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span className="pagination">Page {page} sur {totalPages}</span>
            <button className='nextButton btn btn-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>        

        <div className="d-flex flex-wrap justify-content-around align-content-center gap-5 col-8">
            {people.map((people) => {
            return <PeopleCard key={people.id} peopleC={people}/>
            })}
        </div>

        <div className='pageButton d-flex justify-content-between align-items-center mt-4' >
            <button className='previousButton btn btn-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span className="pagination">Page {page} sur {totalPages}</span>
            <button className='nextButton btn btn-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>

    </div>;
}
 
export default PeoplePage;
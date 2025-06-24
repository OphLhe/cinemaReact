import { useEffect, useState } from "react";
import PeopleCard from "../Components/PeopleCard";
import axios from "axios";

const PeoplesPage = () => {

    const [peoples, setPeoples] = useState([]) ;

    const fetchPeoples = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/person/popular", {
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
                }
            });
            setPeoples(response.data.results)
            console.log(response.data.results);
            
        } catch (error) {
            console.error("Error fetching peoples:", error);     
        }
    }

    useEffect( () => {
        fetchPeoples();
    }, []);


    return <div className="d-flex flex-column justify-content-center align-items-center">
    <h1>Peoples Page</h1>
    <div className="d-flex flex-wrap justify-content-around align-content-center gap-5 col-8">
    {peoples.map((people) => {
        return <PeopleCard key={people.id} peopleC={people}/>
    })}
    </div>
    </div>;
}
 
export default PeoplesPage;
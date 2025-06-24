import { useEffect, useState } from "react";
import PeopleCard from "../Components/PeopleCard";
import axios from "axios";
import { Button, Col, Form, Row } from 'react-bootstrap';

const PeoplePage = () => {

    const [people, setPeople] = useState([]) ;

    const fetchPeople = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/person/popular", {
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
                }
            });
            setPeople(response.data.results)
            console.log(response.data.results);
            
        } catch (error) {
            console.error("Error fetching people:", error);     
        }
    }

    useEffect( () => {
        fetchPeople();
    }, []);


    return <div className="d-flex flex-column justify-content-center align-items-center">
    <h1>People Page</h1>

        <Form >
            <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Submit</Button>
                </Col>
            </Row>
        </Form>

    <div className="d-flex flex-wrap justify-content-around align-content-center gap-5 col-8">
    {people.map((people) => {
        return <PeopleCard key={people.id} peopleC={people}/>
    })}
    </div>
    </div>;
}
 
export default PeoplePage;
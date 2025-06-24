import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import axios from "axios";
import { Button, Col, Form, Row } from 'react-bootstrap';

const HomePage = () => {
    
    const[movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const fetchMovies = async () => {
        try {
        const response = await axios.get(` https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=${page}&include_adult=false`, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        });
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
               
        } catch (error) {
            console.error("Error fetching movies:",error);
        }
    }

    useEffect( () => {
        fetchMovies();
    }, [page]);

    return <div className='d-flex flex-column align-items-center justify-content-center m-4'>
        <h1>HomePage</h1>

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

        <div className='d-flex justify-content-between align-items-center m-5'>
            <button className='btn btn-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span>Page {page} sur {totalPages}</span>
            <button className='btn btn-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>

        <div className='d-flex flex-wrap justify-content-around align-content-center gap-5 col-8'>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movieC={movie} />
            })}
        </div>
        <div className='d-flex justify-content-between align-items-center mt-5' >
            <button className='btn btn-primary' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span>Page {page} sur {totalPages}</span>
            <button className='btn btn-primary' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>
    </div>;
}
 
export default HomePage;
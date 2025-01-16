import { useState, useEffect } from "react";
import { getTrendingMovies } from '../../services/API'
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTrendingMovies() {
            try {
                setIsLoading(true);
                setError(null);
                const movies = await getTrendingMovies();
                setMovies(movies.results)
            } catch {
                setError('Something went wrong. Please, try again later')
            } finally {
                setIsLoading(false)
            }
            
        };
        fetchTrendingMovies();
    }, [])
    return (
        <div>
            {isLoading && <Loader />}
            {error ? (<ErrorMessage message={error} />) : (<MovieList movies={movies} />)}
        </div>
    )
}

export default HomePage
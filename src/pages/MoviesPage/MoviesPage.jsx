import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar"
import MovieList from "../../components/MovieList/MovieList"
import { getSearchMovie } from "../../services/API";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const query = searchParams.get('query') ?? ''

    useEffect(() => {
        if (query === '') return;

        async function fetchSearchMovie() {
            try {
                setIsLoading(true);
                setError(null);
                const movies = await getSearchMovie(query);
                setMovies(movies.results)
            } catch {
                setError('Sorry! We couldn`t find any movie from your request')
            } finally {
                setIsLoading(false)
            }
            
        };
        fetchSearchMovie();
    }, [query])

    const handleChangeQuery = (newQuery) => {
        if (!newQuery) {
            return setSearchParams({})
        }
        searchParams.set('query', newQuery);
        setSearchParams(searchParams);
    }

    return (
        <div>
            <h2>
                <SearchBar handleChangeQuery={handleChangeQuery} quey={query} />
            </h2>

            {isLoading && <Loader/>}
            {error ? (<ErrorMessage message={error}/>) : <MovieList movies={movies}/>}
            
        </div>
    )
}
export default MoviesPage
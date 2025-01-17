import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useParams, useLocation, Link } from "react-router-dom";
import { getMovieDetails } from "../../services/API";
import MovieCard from "../../components/MovieCard/MovieCard";
import s from './MovieDetailsPage.module.css';
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetails = () => {
    const location = useLocation();
    const goBackRef = useRef(location.state ?? "/movies")
    console.log(goBackRef);

    const { movieId } = useParams();
    
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const movie = await getMovieDetails(movieId)
                setMovie(movie)
            } catch {
                setError('Oooopss... Something went wrong. Please, try again later!');
            } finally {
                setIsLoading(false)
            }
            
        }
        getData()
    }, [movieId])
    
    if (!movie) {
        return 'Loading...'
    }

    // const backLink = location.state?.from ?? "/movies"

    return (
        <div>
            {error ? (<ErrorMessage message={error} />) : (
                <div>
                    <Link to={goBackRef.current}>Go back</Link>

                    {isLoading && <Loader />}
                    {!isLoading && <MovieCard movie={movie} />}
                
                    <p>Aditional information</p>
                    <nav>
                        <ul className={s.adInfoList}>
                            <li>
                                <NavLink to='cast'>
                                    Cast
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='reviews'>
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Outlet />
                </div>)}
            
        </div>
    )
}

export default MovieDetails;
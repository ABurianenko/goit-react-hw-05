import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/API";
import PosterImage from "../MovieCard/PosterImage";
import s from './MovieCast.module.css';

const MovieCast = () => {
    const { movieId } = useParams();

    const [cast, setCast] = useState([])
    
    useEffect (() => {
        const getData = async () => {
            const data = await getMovieCredits(movieId);
            setCast(data.cast);
        };
        getData();
    }, [movieId]);

    return (
        <ul>
            {cast.map(({ id, name, profile_path, character }) => (
                <li className={s.castItem} key={id}>
                    <PosterImage className={s.castImage} path={profile_path} alt={name} />
                    <h3>{name}</h3>
                    <p>{character}</p>
                </li>
            ))}
        </ul>
    )
}
export default MovieCast;
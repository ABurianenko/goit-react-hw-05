import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/API";
import s from './MovieReviews.module.css'

const MovieReviews = () => {
    const { movieId } = useParams();
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getMovieReviews(movieId);
            setReviews(data.results)
        }
        getData();
    }, [movieId])

    return (
        <ul className={s.reviewsList}>
            {!reviews.length && <p>Sorry... We don`t have any reviews for this movie</p>}
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
}

export default MovieReviews;
import PosterImage from "./PosterImage";
import s from './MovieCard.module.css'

const MovieCard = ({
    movie: {
        poster_path = "",
        title = "Unknown movie title",
        release_date = "",
        overview = "No overview available",
        genres = [],
        vote_average = "No data",
    } ={}
}) => {
    return (
        <div className={s.movieCard}>
            <div className={s.imageContainer}>
                <PosterImage className={s.posterImage} path={poster_path} alt={title}/>
            </div>
            <div>
                <h1>{title} ({release_date.slice(0,4)})</h1>
                <p>User score: {Number(vote_average).toFixed(1)}</p>
                <div className={s.overview}>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                </div>
                
                <h2>Genres</h2>
                <ul className={s.genreList}>
                    {genres.map(({ id, name }) => (
                        <li className={s.genreItem} key={id}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MovieCard;
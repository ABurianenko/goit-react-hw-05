

const BASE_URL = `https://image.tmdb.org/t/p/w500`

const PosterImage = ({ path, alt, className }) => {
    const posterPath = `${BASE_URL}${path}`;
    const posterAlt = `${alt}` || 'No image available'

    return (<img className={className} src={posterPath} alt={posterAlt} />)
}

export default PosterImage;
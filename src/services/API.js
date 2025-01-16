import axios from 'axios';

const API_KEY = 'd490d65d3abf60893d6856af12f22aaa';
const BASE_URL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data
}

const getSearchMovie = async text => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`)
    return response.data
}

const getMovieDetails = async id => {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return response.data
}

const getMovieCredits = async id => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    return response.data
}

const getMovieReviews = async id => { 
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    return response.data
}

export {getTrendingMovies, getSearchMovie, getMovieDetails, getMovieCredits, getMovieReviews}
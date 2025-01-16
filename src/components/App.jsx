import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import s from './App.module.css'
import HomePage from '../pages/HomePage/HomePage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MovieDetails from '../pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews'

function App() {
  
  return (
    <div className={s.container}>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

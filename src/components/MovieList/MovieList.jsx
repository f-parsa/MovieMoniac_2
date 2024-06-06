import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Fire from '../../assets/fire.png'
import MovieCard from './MovieCard'


const MovieList = () => {

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=83837907fa5c7cdbc976c9e12ca2c412')
        const data = await response.json()
        setMovies(data.results)
    }
  return (
    <section className='movie_list'>
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>
                Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' />
            </h2>
            <div className="align_center movie_list_fs">
                <ul className="align_center movie_filter">
                    <li className="movie_filter_item active">8+ Star</li>
                    <li className="movie_filter_item">7+ Star</li>
                    <li className="movie_filter_item">6+ Star</li>
                </ul>
                <select name="" id="" className="movie_sorting">
                    <option value="">Sort By</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie_sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>
        <div className="movie_cards">
            {
                Movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </section>
  )
}

export default MovieList
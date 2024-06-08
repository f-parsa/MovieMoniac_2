import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import './MovieList.css'
import Fire from '../../assets/fire.png'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'


const MovieList = () => {

    const [Movies, setMovies] = useState([])
    const [Rating, setRating] = useState(0)
    const [filterMovies, setfilterMovies] = useState([])
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    })

    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=83837907fa5c7cdbc976c9e12ca2c412')
        const data = await response.json()
        setMovies(data.results)
        setfilterMovies(data.results)
    }

    const handleFilter = rate =>
        {
            if (rate === Rating)
                {
                    setRating(0)
                    setfilterMovies(Movies)
                }
            else {
                setRating(rate)
                const filtered = Movies.filter(movie => movie.vote_average >= rate)
                setfilterMovies (filtered)
                }
            
        }

    const handleSort = e => {
        const {name, value} = e.target;
        setSort(prev => {
            return {...prev, [name]: value}
        })
    }
    console.log(sort);
  return (
    <section className='movie_list'>
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>
                Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' />
            </h2>
            <div className="align_center movie_list_fs">
                <FilterGroup Rating={Rating} onRatingClick={handleFilter} ratingList={[8,7,6]}/>
                <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
                    <option value="default">Sort By</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" onChange={handleSort} value={sort.order} className="movie_sorting">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </header>
        <div className="movie_cards">
            {
                filterMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </section>
  )
}

export default MovieList
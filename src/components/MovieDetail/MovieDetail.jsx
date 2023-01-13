import React from 'react'
import './MovieDetail.scss'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchAsyncMovieShowDetails,
  removeSelectedEvent,
  selectedMovieOrShow,
} from '../../features/movies/movieSlice'
import { AiFillStar } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'
import { FaFilm } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'

export default function MovieDetail() {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(selectedMovieOrShow)
  console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncMovieShowDetails(imdbID))
    return () => {
      dispatch(removeSelectedEvent())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? 
    (<div className='loading'> Loading...  </div>  )
    : 
    (
      <>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating{' '}
              <i className="star-icon">
                <AiFillStar />
              </i>{' '}
              : {data.imdbRating}
            </span>
            <span>
              IMDB Voting
              <i className="icon">
                <FaThumbsUp />
              </i>
              :  {data.imdbVotes}
            </span>
            <span>
              Runtime
              <i className="icon">
                <FaFilm />
              </i>
              :  {data.Runtime}
            </span>
            <span>
              Year
              <i className="icon">
                <AiFillCalendar />
              </i>
              :  {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <span>Director </span>
            <span>{data.Director}</span>
          </div>
          <div className="movie-info">
            <span>Stars </span>
            <span>{data.Actors}</span>
          </div>
          <div className="movie-info">
            <span>Genres </span>
            <span>{data.Genre}</span>
          </div>
          <div className="movie-info">
            <span>Languages </span>
            <span>{data.Language}</span>
          </div>
          <div className="movie-info">
            <span>Awards </span>
            <span>{data.Awards}</span>
          </div>
        </div>

        <div className="section-right ">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </>
    )}
    </div>
  )
}

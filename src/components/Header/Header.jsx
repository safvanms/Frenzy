import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice'
import { loading } from '../../features/movies/movieSlice'
import { RotatingLines } from 'react-loader-spinner'

export default function Header() {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    if (term === '') return alert('Oops! Invalid Searching')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }

  return ( 
    <div className="header">
      <Link to="/">
        <div className="logo">
          <span>Frenzy</span>
          <span>🎬</span>
        </div>
      </Link>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows "
            onChange={(e) => setTerm(e.target.value)}
            required
          />

          <button type="submit">
            <i>
              {loading ? (
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="3"
                  animationDuration="1"
                  width="26"
                  visible={true}
                />
              ) : (
                <FiSearch />
              )}
            </i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

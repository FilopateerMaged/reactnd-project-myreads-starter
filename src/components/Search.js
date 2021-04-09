import React from 'react'
import { Link } from 'react-router-dom';

const Search = ({ query, handleQuery }) => {
  return (
    <div className="search-books-bar">
      <Link to='/'>
        <button className="close-search" title='Close Search'>Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event) => handleQuery(event.target.value)}
        />
      </div>
    </div>
  )
}

export default Search;
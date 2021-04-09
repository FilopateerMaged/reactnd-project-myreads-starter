import React from 'react'
import {Link} from 'react-router-dom'

const searchFab = () => {
  return (
    <Link to='/searchbooks'>
    <div className="open-search">
      <button title='Add a book'>Add a book</button>
    </div>
    </Link>
  )
}

export default searchFab;
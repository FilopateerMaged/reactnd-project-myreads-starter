import React from 'react'
import BookArray from './BookArray'
import ShelfTitle from './ShelfTitle'

const Shelfs = ({ books, updateBook, shelfName }) => {

  const formatHeading = (shelfName) => {
    let name;
    if (shelfName === 'read') {
      name = 'Read'
    } else if (shelfName === 'currentlyReading') {
      name = 'Currently Reading'
    } else if (shelfName === 'wantToRead') {
      name = 'Want To Read'
    }
    return name;
  }

  return (
    <div className="bookshelf">
      <ShelfTitle heading={formatHeading(shelfName)} />
      <BookArray
        updateBook={updateBook}
        books={books}
      />
    </div>
  )
}

export default Shelfs
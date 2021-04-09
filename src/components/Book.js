import React from 'react'
import MoveShelf from './MoveShelf'

const Book = ({ book, updateBook }) => {

  return (
    <div className="book">
      <div className="book-top">
        <div style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks &&
            book.imageLinks.thumbnail})`
        }} />
        <MoveShelf
          updateBook={updateBook}
          book={book}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{
        (book.authors) ?
          (book.authors).join(", ") : '*No Author Listed*'
      }
      </div>
    </div>
  )
}
export default Book
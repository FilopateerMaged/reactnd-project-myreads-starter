import React from 'react'
import Book from './Book'

const BookArray = ({ books, updateBook }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              updateBook={updateBook}
              book={book}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default BookArray
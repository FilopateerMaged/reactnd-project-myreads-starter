import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shelfs from './components/Shelfs';
import Results from './components/Results';
import SearchFab from './components/SearchFab';

const App = () => {

  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    await BooksAPI.getAll().then((data) => {
      setBooks(data);
    })
  };

  const updateShelf = (allBooks) => {
    const shelf = [...new Set(allBooks.map(book => book.shelf))];
    return shelf;
  }

  const updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    books.map((thisBook) => {
      if(thisBook.id === book.id) {
        thisBook.shelf = shelf;
      }
      return thisBook;
    })
    //setBooks(books);
    getAllBooks();
  }

  useEffect(() => {
    getAllBooks();
  }, [])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              {updateShelf(books).map(shelf =>
                <Shelfs
                  updateBook={updateBook}
                  key={shelf}
                  shelfName={shelf}
                  books={books.filter(book => book.shelf === shelf)}
                />
              )}
              <SearchFab />
            </div>
          )} />
          <Route path='/searchbooks'>
            <Results books={books} updateBook={updateBook} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

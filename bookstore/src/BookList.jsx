import React from 'react'

const BookList = () => {
    const books = [
        { id: 1, name: "Book1 ", price: 10 },
        { id: 2, name: "Book2 ", price: 20 },
        { id: 3, name: "Book3 ", price: 30 },
    ];
    return (
      <div className="container">
        <h1>Book List</h1>
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text">Price: €{book.price}</p>
                  <a href={`/books/${book.id}`} className="btn btn-primary">
                    View Detials
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default BookList
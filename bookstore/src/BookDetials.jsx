import React from "react";
import { useParams } from "react-router-dom";

const BookDetials = () => {
  const { id } = useParams();
  const books = [
    {
      id: 1,
      title: "JavaScript: The Definitive Guide",
      image:
        "https://elementor.com/cdn-cgi/image/f=auto,w=720/marketing/wp-content/uploads/sites/9/2021/07/image4.jpg",
      price: "10 Euro",
      description:
        "The Definitive Guide, is the perfect companion if you want to learn JavaScript. This web development book is suitable for beginners and more advanced users who want to go beyond the basics and become pro JavaScript programmers. ",
    },
    {
      id: 2,
      title: "Eloquent JavaScript",
      image:
        "https://elementor.com/cdn-cgi/image/f=auto,w=720/marketing/wp-content/uploads/sites/9/2021/07/image3.jpg",
      price: "15 Euro",
      description:
        "Eloquent JavaScript by Marijn Haverbeke is another best-selling JavaScript book. The best part about this web development book is that you can get it in Kindle or paperback format or read the online version for free. ",
    },
    // Add more books here...
    {
      id: 3,
      title: "Road To React: Your Journey To Master React.js in JavaScript",
      image:
        "https://elementor.com/cdn-cgi/image/f=auto,w=720/marketing/wp-content/uploads/sites/9/2021/07/image7.jpg",
      price: "25 Euro",
      description:
        "This fantastic book will have you build a full-blown web application using React.js. In the process, you’ll learn about the fundamentals of React.js with Hooks. ",
    },
  ];

    const book = books.find(book => book.id === Number(id));
    
    return (
        <div className="container">
            <h1>Book Details</h1>
            {
                book ? (
                    <div className="card">
                        <img src={book.image} alt={book.title} />
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">Price: {book.price}</p>
                            <p className="card-text">Description:{book.description}</p>
                        </div>
                    </div>
                ): (
                    <p>Book could not be found</p>
                )
            }
      </div>
  );
};

export default BookDetials;

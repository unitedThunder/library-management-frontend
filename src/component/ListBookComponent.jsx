import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';
import { useParams } from 'react-router-dom';


const ListBookComponent = () => {
    const { isbn } = useParams();
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        BookService.getBooks().then((res) => {
            setBooks(res.data);
        });
    }, []);

    const deleteBook = (isbn) => {
        BookService.deleteBook(isbn).then((res) => {
            setBooks(books.filter(book => book.isbn !== isbn));
            navigate('/books');
        });
    };


    return (
        <div>
            <h2 className="text-center">Books List</h2>

            <Link to="/add-book" className="btn btn-primary">
                Add Book
            </Link>

            <div className="row mt-2">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Book Name </th>
                            <th>Serial Number </th>
                            <th>Description </th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.map((book) => (
                            <tr key={book.isbn}>
                                <td>{book.isbn}</td>
                                <td>{book.bookName}</td>
                                <td>{book.serialNumber}</td>
                                <td>{book.description}</td>
                                <td>
                                    <Link to={`/update-book/${book.isbn}`}>
                                        <button className='btn btn-info'>Update</button>
                                    </Link>
                                    <button style={{ marginLeft: '10px' }} className='btn btn-danger' onClick={() => deleteBook(book.isbn)}>Delete</button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ListBookComponent;

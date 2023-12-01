import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookService from '../services/BookService';
const UpdateBookComponent = () => {
    const { isbn } = useParams();
    const [book, setBook] = useState({
        isbn: '',
        bookName: '',
        serialNumber: '',
        description: '',
    });

    useEffect(() => {
        BookService.getBookByIsbn(isbn).then((res) => {
            setBook(res.data);
        });
    }, [isbn]);

    const navigate = useNavigate();

    const updateBook = (event) => {
        event.preventDefault();

        // const updatedBook = {
        //     isbn: isbn,
        //     bookName: book.bookName,
        //     serialNumber: book.serialNumber,
        //     description: book.description,
        // };

        console.log('Updating book with:', book);

        BookService.updateBook(book, isbn).then((res) => {
                console.log('Book updated successfully:', res.data);
                navigate('/books');
            })
            .catch((error) => {
                console.error('Error updating book:', error);
                // Handle the error, e.g., show a user-friendly message
            });
    };


    const cancel = () => {
        navigate('/books');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(`Updating ${name} to: ${value}`);
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                        <h3 className="text-center">Update Book</h3>
                        <div className="card-body">
                            <form action="">


                                <div className="form-group">
                                    <label> Book Name: </label>
                                    <input placeholder="Book Name" name="bookName" className="form-control" value={book.bookName} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label> Serial Number: </label>
                                    <input placeholder="Serial Number" name="serialNumber" className="form-control" value={book.serialNumber} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label> Description: </label>
                                    <input placeholder="Description" name="description" className="form-control" value={book.description} onChange={handleChange} />
                                </div>

                                <button className="btn btn-success mt-3" onClick={updateBook}>Save</button>
                                <button className="btn btn-danger mt-3" onClick={cancel} style={{ marginLeft: '10px' }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBookComponent;
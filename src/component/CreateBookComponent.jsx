import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const CreateBookComponent = () => {
    const [book, setBook] = useState({
        isbn: '',
        bookName: '',
        serialNumber: '',
        description: '',
    });

    const navigate = useNavigate();

    const saveBook = (event) => {
        event.preventDefault();
        console.log('book => ' + JSON.stringify(book));

        BookService.createBook(book).then(res=>{
            navigate('/books');
        });
    };

    const cancel = () => {
        navigate('/books');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                        <h3 className="text-center">Add Book</h3>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label> ISBN: </label>
                                    <input placeholder="ISBN" name="isbn" className="form-control" value={book.isbn} onChange={handleChange} />
                                </div>

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

                                <button className="btn btn-success mt-3" onClick={saveBook}>Save</button>
                                <button className="btn btn-danger mt-3" onClick={cancel} style={{ marginLeft: '10px' }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBookComponent;

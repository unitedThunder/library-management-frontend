import React, { Component } from 'react';
import BookService from '../services/BookService';

class ListBookComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            books: []
        }

        this.addBook=this.addBook.bind(this);
    }

    componentDidMount(){
        BookService.getBooks().then((resp) => {
            this.setState({books: resp.data});
        });
    }

    addBook(){
        this.props.history.push('/addbook');
    }
    render() {
        return (
            <div>
                <h1 className='text-center'>Book List</h1>
                <div>
                    <button className="btn btn-primary" onClick={this.addBook}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Book Name</th>
                                <th>Serial Number</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr>
                                        
                                        <td>{book.isbn}</td>
                                        <td>{book.bookName}</td>
                                        <td>{book.serialNumber}</td>
                                        <td>{book.description}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListBookComponent;
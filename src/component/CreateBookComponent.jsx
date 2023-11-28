import React, { Component } from 'react';

class createBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isbn:'',
            bookName:'',
            description:'',
            serialNumber:''
        }
    }

    changeIsbnHandeler = (event)=>{
        this.setState({isbn: event.target.value});
    }
    changeBookNameHandeler = (event)=>{
        this.setState({bookName: event.target.value});
    }
    changeDescriptionHandeler = (event)=>{
        this.setState({description: event.target.value});
    }
    changeSerialNumberHandeler = (event)=>{
        this.setState({serialNumber: event.target.value});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Book</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>ISBN: </label>
                                    <input placeholder='Enter ISBN' name='isbn' className='form-control' value={this.state.isbn} onChange={this.changeIsbnHandeler} />
                                </div>
                                <div className="form-group">
                                    <label>Book Name: </label>
                                    <input placeholder='Book Name' name='bookName' className='form-control' value={this.state.bookName} onChange={this.changeBookNameHandeler} />
                                </div>
                                <div className="form-group">
                                    <label>Description: </label>
                                    <input placeholder='Description' name='description' className='form-control' value={this.state.description} onChange={this.changeDescriptionHandeler} />
                                </div>
                                <div className="form-group">
                                    <label>Serial Number: </label>
                                    <input placeholder='Serial Number' name='serialNumber' className='form-control' value={this.state.serialNumber} onChange={this.changeSerialNumberHandeler} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default createBookComponent;
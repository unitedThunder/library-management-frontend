import axios from 'axios';
const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/books";
class BookService{
    getBooks(){
        return axios.get(BOOK_API_BASE_URL);
    }

    createBook(book){
        return axios.post("http://localhost:8080/api/v1/book",book);
    }

    getBookByIsbn(isbn){
        return axios.get(`http://localhost:8080/api/v1/book/${isbn}`);
    }

    updateBook(updatedBook,isbn) {
        return axios.put(`http://localhost:8080/api/v1/book/${isbn}`,updatedBook);
        
    }

    deleteBook(isbn){
        return axios.delete(`http://localhost:8080/api/v1/book/${isbn}`);
    }
}

export default new BookService()
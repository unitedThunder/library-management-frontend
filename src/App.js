import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListBookComponent from './component/ListBookComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateBookComponent from './component/CreateBookComponent';


function App() {
  return (
    <div>
      
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListBookComponent/>} />
            <Route path="/books" element={<ListBookComponent/>} />
            <Route path="/addbook" element={<CreateBookComponent/>} />
          </Routes>
        </div>
        <FooterComponent />
     
    </div>
  );
}

export default App;

import React from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Header = () => {
  return (

      
      <div className="w-100 bg-info">
          <div className="row p-3  text-white w-100">
                  <div className="col-3"><Link to="/" className="text-decoration-none text-white fs-3 fw-bolder">📚Book Management</Link></div>
                  <div className="col-6"></div>
                 <div className="col-3 d-flex flex-row justify-content-between text-white">
                    <p><Link to='/add-book' className="text-decoration-none text-white">Add Books +</Link></p>
                    <p><Link to='/view-bookList' className="text-decoration-none text-white">View Books</Link></p>  
                 </div>
          </div>
      </div>
     
 
  );
};

export default Header;

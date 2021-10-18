import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary">
      <div className="container">
        <Nav className="justify-content-center">
          <Navbar.Brand href="/">Gerência da Loja</Navbar.Brand>
          <Nav.Item>
            <Link className="nav-link text-white" to="/admin/">Lista dos produtos</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link text-white" to="/admin/add">Adicionar Produto</Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
}; 

export default Header;

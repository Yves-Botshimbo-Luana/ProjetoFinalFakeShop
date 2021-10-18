import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./header";

const Layout = ({ children, title }) => {
  return (
    <div style={{background: "#eee", height: "100vh"}}>
      <Header />
      <Container>
        <Row>
          <h1 className="text-center">{title}</h1>
        </Row>
        <Row>{children}</Row>
      </Container>
    </div>
  );
}; 

export default Layout;

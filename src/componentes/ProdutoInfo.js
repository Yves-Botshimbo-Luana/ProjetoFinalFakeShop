import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import im from "../imagens/tdpro.jpg";
import Layout from "./LayoutAdmin";

const ProdutoInfo = (props) => {
  const { name, price, size, color, url_img } = props.location.state.produto;

  return (
    <Layout title={name}>
      <Container>
        <Row>
          <Col sm="4">
          <Card>
            <Card.Img variant="top" src={url_img} />
            <Card.Body>
              <Card.Title>Nome: {name}</Card.Title>
              <Card.Text>Preço: {price}</Card.Text>
              <Card.Text>Tamanho: {size}</Card.Text>
              <Card.Text>Cor: {color}</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}; 
export default ProdutoInfo;

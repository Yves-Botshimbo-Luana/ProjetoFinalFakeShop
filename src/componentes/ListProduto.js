import React from "react";
import ProdutCard from "./ProdutCard";
import { Card, Table } from "react-bootstrap";
import Layout from "./LayoutAdmin";

const ListProduto = ({ produtos: products, deleteProductById }) => {
  return (
    <Layout title="Lista dos produtos">
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Img</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Tamanho</th>
                <th>Cor</th>
                <th>Metodo</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProdutCard
                  produto={product}
                  handleDeleteById={deleteProductById}
                  key={product.id}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Layout>
  );
}; 
export default ListProduto;

import React from "react";
import { Card } from "react-bootstrap";

import Layout from "./LayoutAdmin";
import FormProduct from "./FormProduct";

class EditProduto extends React.Component {
  //criando configuraçoes
  constructor(props) {
    super(props);
    const { id, name, price, size, color, url_img } =
      props.location.state.produto;

    this.state = {
      id: id,
      name: name,
      price: price,
      size: size,
      color: color,
      url_img: url_img,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.price === "") {
      alert("Os dois primeiros campos são obrigatórios");
      return;
    }
    //mostrar dados organizados quando adicionado
    this.props.updateProduto(this.state);

    //limpando informacoes depois de adicionado
    this.setState({ name: "", price: "", size: "", color: "", url_img: "" });

    //depois de adicionado queremos voltar para a nossa lista
    this.props.history.push("/admin");
  };

  changeValues = (newValue) => {
    this.setState(newValue);
  };

  render() {
    return (
      <Layout title={`Atualizar ${this.state.name}`}>
        <Card>
          <Card.Header>Info Produto</Card.Header>
          <Card.Body>
            <FormProduct
              values={this.state}
              changeValues={this.changeValues}
              onSubmit={this.update}
            />
          </Card.Body>
        </Card>
      </Layout>
    );
  }
}

export default EditProduto;

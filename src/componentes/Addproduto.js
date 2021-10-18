import React from "react";
import Layout from "./LayoutAdmin";
import { Card } from "react-bootstrap";
import FormProduct from "./FormProduct";

class AddProduto extends React.Component {
  //criando configuraçoes
  state = {
    name: "",
    price: "",
    size: "",
    color: "",
    url_img: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.price === "") {
      alert("Os dois primeiros campos são obrigatórios");
      return;
    }
    //mostrar dados organizados quando adicionado
    this.props.novoProduto(this.state);

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
      <Layout title="Agregar produto">
        <Card>
          <Card.Header>Info Produto</Card.Header>
          <Card.Body>
            <FormProduct
              values={this.state}
              changeValues={this.changeValues}
              onSubmit={this.add}
            />
          </Card.Body>
        </Card>
      </Layout>
    );
  }
}

export default AddProduto;

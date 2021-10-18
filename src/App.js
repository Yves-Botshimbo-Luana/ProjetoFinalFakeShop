import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import api from "./api/produtos";
import AdicionarProduto from "./componentes/Addproduto";
import ListaProdutos from "./componentes/ListProduto";
import ProdutoInfo from "./componentes/ProdutoInfo";
import EditProduto from "./componentes/Editproduto";
import HomePage from "./pages/Home";

function App() {
  const [produtos, setProducts] = useState([]);

  //recuperar produtos da fake api
  const recuperarProduto = async () => {
    const resposta = await api.get("/produtos");
    return resposta.data;
  };
  //Cadastro de novos produtos
  const novoProduto = async (produto) => {
    const request = {
      id: uuid(),
      ...produto,
    };
    //criando chamadas da api
    const resposta = await api.post("/produtos", request);

    setProducts([...produtos, resposta.data]);
  };

  //Atualizar produto
  const updateProduto = async (produto) => {
    const resposta = await api.put(`/produtos/${produto.id}`, produto);

    const { id, name, price, size, color } = resposta.data;

    setProducts(
      produtos.map((produto) => {
        return produto.id === id ? { ...resposta.data } : produto;
      })
    );
  };

  //codigo para eliminar algo cadastrado
  const deleteProductById = async (id) => {
    await api.delete(`/produtos/${id}`);

    const nvProduto = produtos.filter((produto) => {
      return produto.id !== id;
    });
    setProducts(nvProduto);
  };

  //criando efeito de como os dados vão ser apresentados
  useEffect(() => {
    const getProdutos = async () => {
      const todosProdutos = await recuperarProduto();
      if (todosProdutos) {
        setProducts(todosProdutos);
      }
    };
    getProdutos();
  }, []);  

  return (
    <div className="">
      <Router>
        <Switch>
          <Route
            path="/admin/"
            exact
            render={(props) => (
              <ListaProdutos
                {...props}
                produtos={produtos}
                deleteProductById={deleteProductById}
              />
            )}
          />
          <Route
            path="/admin/add"
            render={(props) => (
              <AdicionarProduto {...props} novoProduto={novoProduto} />
            )}
          />
          <Route
            path="/admin/edit"
            render={(props) => (
              <EditProduto {...props} updateProduto={updateProduto} />
            )}
          />
          <Route path="/admin/produto/:id" component={ProdutoInfo} />
          <Route path="/" render={() => <HomePage produtos={produtos} />} />
        </Switch>
      </Router>
    </div>
  );
} 

export default App;

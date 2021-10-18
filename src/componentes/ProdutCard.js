import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import im from "../imagens/produto.png";

const ProdutoCard = ({ handleDeleteById, produto }) => {
  const { id, name, price, size, color, url_img } = produto;

  return (
    <tr>
      <td>
        <img width="65px" src={url_img} alt="produto" />
      </td>
      <td>
        <Link to={{ pathname: `admin/produto/${id}`, state: { produto: produto } }}>
          <div className="header">{name}</div>
        </Link>
      </td>
      <td>{price}</td>
      <td>{size}</td>
      <td>{color}</td>
      <td>
        <Button variant="danger" onClick={() => handleDeleteById(id)}>
          Delete
        </Button>
        <Link to={{ pathname: `/admin/edit`, state: { produto } }}>
          <Button>Editar</Button>
        </Link>
      </td>
    </tr>
  );
};

export default ProdutoCard;

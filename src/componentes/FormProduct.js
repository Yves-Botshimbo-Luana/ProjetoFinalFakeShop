import React from "react";
import { FormControl, FormGroup, Button } from "react-bootstrap";

const FormProduct = ({ values, changeValues, onSubmit }) => {
  return (
    <form className="" onSubmit={onSubmit}>
      <FormGroup>
        <label>Nome do produto</label>
        <FormControl
          type="text"
          name="name"
          placeholder="Calça Jeans"
          value={values.name}
          onChange={(e) => changeValues({ name: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label>Preço do Produto</label>
        <FormControl
          type="number"
          name="name"
          placeholder="18.00"
          value={values.price}
          onChange={(e) => changeValues({ price: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label>size do Produto</label>
        <FormControl
          type="text"
          name="name"
          placeholder="XML"
          value={values.size}
          onChange={(e) => changeValues({ size: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <label>cor do Produto</label>
        <FormControl
          type="text"
          name="name"
          placeholder="Cinza"
          value={values.color}
          onChange={(e) => changeValues({ color: e.target.value })}
        />
      </FormGroup>

      <FormGroup style={{ marginBottom: 18 }}>
        <label>Url Img</label>
        <FormControl
          type="text"
          name="url_img"
          placeholder="Img"
          value={values.url_img}
          onChange={(e) => changeValues({ url_img: e.target.value })}
        />
      </FormGroup>
      <Button type="submit" className="ui button blue">Adicionar</Button>
    </form>
  );
}; 

export default FormProduct;

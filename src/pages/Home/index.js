import React from "react";
import LayoutSite from "../../componentes/LayoutSite";
import ProductItem from "./components/ProductItem";

const HomePage = ({ produtos }) => {
  return (
    <LayoutSite>
      {produtos.map((product) => (
        <ProductItem
          name={product.name}
          urlImg={product.url_img}
          price={product.price}
          color={product.color}
        />
      ))}
    </LayoutSite>
  );
};

export default HomePage;

import React from "react";

const ProductItem = ({ name, urlImg, price, description }) => (
  <div className="col mb-5">
    <div className="card h-100">
      <img className="card-img-top" src={urlImg} alt={`${name}-ptoho`} />

      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{name}</h5>
          R$ {price}
        </div>
      </div>

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="/">
            Ver mais
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProductItem;

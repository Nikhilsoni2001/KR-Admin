import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "../../Firebase";

const List = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products")
      .get()
      .then((snapshot) => {
        let tempProducts = [];
        tempProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }));
        setProducts(tempProducts);
      });
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <Container>
      {products.map((data) => (
        <Product
          id={data.id}
          name={data.product.name}
          price={data.product.price}
          image={data.product.image}
          description={data.product.description}
          type={data.product.type}
          quantity={data.product.quantity}
        />
      ))}
    </Container>
  );
};

export default List;

const Container = styled.div`
  background: #f1f1f1;
  height: 89vh;
  padding-top: 10px;
`;

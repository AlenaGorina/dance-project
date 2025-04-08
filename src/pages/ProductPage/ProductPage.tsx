import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Получаем данные о продукте из store
  const product = useSelector(
    (state: RootState) => state.cards.find((card) => card.name === id) // Ищем продукт по id
  );

  const handleBackClick = () => {
    navigate("/");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <button onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default ProductPage;

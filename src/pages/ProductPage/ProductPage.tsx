import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { DanceCardType } from "../../types/types";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Получаем данные о продукте из store
  const product = useSelector(
    (state: RootState): DanceCardType | undefined =>
      state.cards.find((card) => card.name === id) // Указываем тип возвращаемого значения
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCard } from "./store/actions";
import Filter from "./components/Filter/Filter";
import DanceCardList from "./components/DanceCardList/DanceCardList";
import { DanceCardType } from "./types/types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductPage from "./pages/ProductPage/ProductPage";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.pexels.com/v1/search?query=dance&per_page=10", {
        headers: {
          Authorization:
            "gkgt0k1bPbb1wm50gI2ajTuxlSY8dbIgvvnsn5h3NAhLXwo2985KK1ep",
        },
        params: {
          per_page: 10,
        },
      })
      .then((response) => {
        const images = response.data.photos;
        images.forEach((image: any) => {
          const card = {
            name: image.alt,
            description: "",
            image: image.src.medium,
            hasLike: false,
            author: image.photographer,
          };
          dispatch(addCard(card));
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching data from Pexels API");
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <Router>
      <header>
        <h1>Dance Styles</h1>
        <Filter />
        <nav>
          <Link to="/create-product">Create New Product</Link>
        </nav>
      </header>
      <div>{loading ? <p>Loading...</p> : <DanceCardList />}</div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Routes>
        <Route path="/" element={<DanceCardList />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;

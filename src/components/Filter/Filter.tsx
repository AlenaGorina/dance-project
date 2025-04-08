import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/actions";

import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const [hasLike, setHasLike] = useState(false);

  const handleFilterButtonClick = () => {
    setHasLike(!hasLike);
    dispatch(setFilter(hasLike ? "all" : "hasLike"));
  };

  return (
    <button
      className={styles["filter-button"]}
      onClick={handleFilterButtonClick}
    >
      {hasLike ? "All Dances" : "Liked Dances"}
    </button>
  );
};

export default Filter;

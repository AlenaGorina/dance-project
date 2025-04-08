import { useDispatch } from "react-redux";
import { toggleLike, removeCard } from "../../store/actions";
import { DanceCardType } from "../../types/types";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import styles from "./DanceCard.module.scss";

interface CardProps {
  card: DanceCardType;
}

const DanceCard: React.FC<CardProps> = ({ card }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(toggleLike(card.name));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(card.name));
  };

  return (
    <div className={styles["card"]}>
      <img src={card.image} alt={card.name} className={styles["card__image"]} />
      <h3 className={styles["card__name"]}>{card.name}</h3>
      <p className={styles["card__description"]}>{card.description}</p>
      <div className={styles["card__buttons"]}>
        <button onClick={handleLikeClick}>
          {card.hasLike ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </button>
        <button onClick={handleRemoveClick} className={styles["delete-btn"]}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default DanceCard;

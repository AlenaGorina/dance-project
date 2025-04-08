import { useSelector } from "react-redux";
import DanceCard from "../DanceCard/DanceCard";
import { RootState } from "../../store/reducers";

import styles from "./DanceCardList.module.scss";

const DanceCardList: React.FC = () => {
  const cards = useSelector((state: RootState) => {
    if (state.filter === "hasLike") {
      return state.cards.filter((card) => card.hasLike);
    } else {
      return state.cards;
    }
  });

  return (
    <div className={styles["card__list"]}>
      {cards.map((card) => (
        <DanceCard key={`${card.name}-${card.author}`} card={card} />
      ))}
    </div>
  );
};

export default DanceCardList;

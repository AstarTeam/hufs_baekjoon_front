import React from "react";
import styles from "./levelIcon.module.css";

function LevelIcon({ level }) {
  const name = levelList.find(item => item.id === level).level;

  return (
    <img
      src={require(`../../../assets/icons/level/${level.toString()}.svg`)}
      alt={name}
      className={styles.icon}
    />
  );
}

const levelList = [
  { id: 1, level: "bronze5" }, //5
  { id: 2, level: "bronze4" }, //4
  { id: 3, level: "bronze3" }, //3
  { id: 4, level: "bronze2" }, //2
  { id: 5, level: "bronze1" }, //1
  { id: 6, level: "silver5" },
  { id: 7, level: "silver4" },
  { id: 8, level: "silver3" },
  { id: 9, level: "silver2" },
  { id: 10, level: "silver1" },
  { id: 11, level: "gold5" },
  { id: 12, level: "gold4" },
  { id: 13, level: "gold3" },
  { id: 14, level: "gold2" },
  { id: 15, level: "gold1" },
  { id: 16, level: "platinum5" },
  { id: 17, level: "platinum4" },
  { id: 18, level: "platinum3" },
  { id: 19, level: "platinum2" },
  { id: 20, level: "platinum1" },
  { id: 21, level: "diamond5" },
  { id: 22, level: "diamond4" },
  { id: 23, level: "diamond3" },
  { id: 24, level: "diamond2" },
  { id: 25, level: "diamond1" },
  { id: 26, level: "ruby5" },
  { id: 27, level: "ruby4" },
  { id: 28, level: "ruby3" },
  { id: 29, level: "ruby2" },
  { id: 30, level: "ruby1" },
];

export default LevelIcon;

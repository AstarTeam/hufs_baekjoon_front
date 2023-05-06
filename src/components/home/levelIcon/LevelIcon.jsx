import React from "react";

function LevelIcon({ level }) {
  const name = levelList.find(item => item.id === level).level;

  return (
    <img
      src={require(`../../../assets/icons/level/${level.toString()}.svg`)}
      alt={name}
    />
  );
}

const levelList = [
  { id: 1, level: "bronze1" },
  { id: 2, level: "bronze2" },
  { id: 3, level: "bronze3" },
  { id: 4, level: "bronze4" },
  { id: 5, level: "bronze5" },
  { id: 6, level: "silver1" },
  { id: 7, level: "silver2" },
  { id: 8, level: "silver3" },
  { id: 9, level: "silver4" },
  { id: 10, level: "silver5" },
  { id: 11, level: "gold1" },
  { id: 12, level: "gold2" },
  { id: 13, level: "gold3" },
  { id: 14, level: "gold4" },
  { id: 15, level: "gold5" },
  { id: 16, level: "platinum1" },
  { id: 17, level: "platinum2" },
  { id: 18, level: "platinum3" },
  { id: 19, level: "platinum4" },
  { id: 20, level: "platinum5" },
  { id: 21, level: "diamond1" },
  { id: 22, level: "diamond2" },
  { id: 23, level: "diamond3" },
  { id: 24, level: "diamond4" },
  { id: 25, level: "diamond5" },
  { id: 26, level: "ruby1" },
  { id: 27, level: "ruby2" },
  { id: 28, level: "ruby3" },
  { id: 29, level: "ruby4" },
  { id: 30, level: "ruby5" },
];

export default LevelIcon;

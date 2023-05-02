export const sortDoingNow = problems => {
  return problems.filter(item => item.myState === true);
};

export const sortNotStarted = problems => {
  return problems.filter(item => item.myState === false);
};

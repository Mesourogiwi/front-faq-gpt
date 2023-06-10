const rand = () => {
  return Math.random().toString(36).substring(2);
};

export const getRandomToken = () => {
  return rand() + rand();
};

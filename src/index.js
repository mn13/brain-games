export default (min, max) => {
  const minTemp = min - 0.5;
  const maxTemp = max - (min - 1);
  const randTemp = Math.random() * (maxTemp);
  return Math.round(minTemp + randTemp);
};

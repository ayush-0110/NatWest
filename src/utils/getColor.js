export const getColor = (temp) => {
  const minTemp = 0;
  const maxTemp = 55;

  const red = Math.round(((temp - minTemp) / (maxTemp - minTemp)) * 255);
  const blue = 255 - red;

  return `rgb(${red}, 0, ${blue})`;
};

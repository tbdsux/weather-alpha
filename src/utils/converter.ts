function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export const KelvinToCelsius = (temp: number) => {
  return roundToTwo(temp - 273.15);
};

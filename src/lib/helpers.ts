export function getRandomNb(max: number, min = 0) {
  return Math.floor(min + Math.random() * (max - min));
}

export function getRandomNumber(n1: number, n2: number = 0) {
  return Math.floor(Math.random() * Math.abs(n1 - n2)) + Math.min(n1, n2);
}

interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  // ...
};

// let drawPoint = (point: { x: number, y: number }) => {
//   // ...
// };

drawPoint({
  x: 1,
  y: 2
});

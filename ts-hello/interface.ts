interface IPoint {
  x: number,
  y: number
}

let drawPoint = (point: IPoint) => {
  // ...
};

// let drawPoint = (point: { x: number, y: number }) => {
//   // ...
// };

drawPoint({
  x: 1,
  y: 2
});

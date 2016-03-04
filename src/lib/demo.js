
export const randomRects = context => {
  context.beginPath();
  context.rect(0, 0, 200, 200);
  context.fillStyle = "grey";
  context.fill();
  context.rect(
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 64),
    Math.floor(Math.random() * 64)
  );
  context.stroke();
  context.closePath();
}

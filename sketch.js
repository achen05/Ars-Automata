function make2DArray(cols, rows) {
  let array = new Array(cols);
  for(let i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvasContainer");
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(124, 125, 115);



  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(124, 125, 115);
        stroke(0);
        rect(x, y, resolution, resolution);

      }
    }
  }

  let next = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      let state = grid[i][j];

      if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
        next[i][j] = state;
      } else {

      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);


      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      }
      else if (state == 1 && neighbors < 2 || neighbors > 3) {
        next[i][j] = 0;
      }
      else {
        next[i][j] = state;
      }
    }
    }
  }
  grid = next;

}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      sum += grid[x + i][y + j];
    }
  }
  sum -= grid[x][y];
  return sum;
}

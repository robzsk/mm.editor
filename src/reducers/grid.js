import PENS from './../pens';
import { DRAW, INCREASE_WIDTH, INCREASE_HEIGHT, DECREASE_WIDTH, DECREASE_HEIGHT } from './../actions/grid';

const initial = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const clone = state => JSON.parse(JSON.stringify(state));

const increaseHeight = grid => {
  const currentHeight = grid.length;
  const newHeight = currentHeight - 1;
  const width = grid[0].length;
  const lastRow = grid[grid.length - 1];
  lastRow.forEach((cell, i) => {
    if (i === 0 || i === width - 1) {
      lastRow[i] = PENS.WALL;
    } else {
      lastRow[i] = PENS.EMPTY;
    }
  });
  grid.push(new Array(width).fill(PENS.WALL));
  return grid;
};

const decreaseHeight = grid => {
  const currentHeight = grid.length;
  const newHeight = currentHeight - 1;
  const width = grid[0].length;
  if (newHeight >= 5) {
    grid.pop();
    const lastRow = grid[grid.length - 1];
    lastRow.forEach((cell, i) => {
      lastRow[i] = PENS.WALL;
    });
  }
  return grid;
};

const increaseWidth = grid => {
  grid.forEach((row, i) => {
    if (i === 0 || i === grid.length - 1) {
      row[row.length - 1] = PENS.WALL;
    } else {
      row[row.length - 1] = PENS.EMPTY;
    }
    row.push(PENS.WALL);
  });
  return grid;
};

const decreaseWidth = grid => {
  const currentWidth = grid[0].length;
  const newWidth = currentWidth - 1;
  if (newWidth >= 5) {
    grid.forEach(row => {
      row.pop();
      row[row.length-1] = PENS.WALL;
    });
  }
  return grid;
};

const draw = ({ x, y, pen }, grid) => {
  const width = grid[0].length;
  const height = grid.length;

  // out of bounds or no change
  // bail early
  if (width <= x || height <= y || x < 0 || y < 0 || grid[y][x] === pen.color) {
    return grid;
  }

  // let's modify
  const newGrid = clone(grid);
  const { color } = pen;

  // remove current player/enemy spawns
  //i.e. there can be only one!
  if (color === PENS.PLAYER || color === PENS.ENEMY) {
    newGrid.forEach((row, ry) => {
      row.forEach((cell, rx) => {
        if (cell === color) {
          newGrid[ry][rx] = PENS.EMPTY;
        }
      })
    })
  }
  newGrid[y][x] = pen.color;
  return newGrid;
};

export default (state, action) => {
  // bail early
  if (state === undefined) {
    return initial;
  }

  switch (action.type) {
    case DRAW:
      return draw(action, state);
    case INCREASE_HEIGHT:
      return increaseHeight(clone(state));
    case DECREASE_HEIGHT:
      return decreaseHeight(clone(state));
    case INCREASE_WIDTH:
      return increaseWidth(clone(state));
    case DECREASE_WIDTH:
      return decreaseWidth(clone(state));
    default:
      return state;
  }
};

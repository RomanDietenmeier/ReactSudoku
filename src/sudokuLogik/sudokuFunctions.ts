let solvesCount = 0;

function solves(field: Array<Array<number>>) {
  if (solvesCount > 1) {
    return;
  }
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (field[x][y] === 0) {
        for (let i = 1; i < 10; i++) {
          if (possible(x, y, i, field)) {
            field[x][y] = i;
            solves(field);
            field[x][y] = 0;
          }
        }
        return;
      }
    }
  }
  solvesCount++;
}

export function possible(
  x: number,
  y: number,
  n: number,
  field: Array<Array<number>>
): boolean {
  for (let i = 0; i < 9; i++) {
    if (field[x][i] === n) return false;
    if (field[i][y] === n) return false;
  }
  const xKachel = Math.floor(x / 3) * 3;
  const yKachel = Math.floor(y / 3) * 3;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (field[xKachel + x][yKachel + y] === n) return false;
    }
  }
  return true;
}

export function solve(field: Array<Array<number>>): boolean {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (field[x][y] === 0) {
        for (let i = 1; i < 10; i++) {
          if (possible(x, y, i, field)) {
            field[x][y] = i;
            if (solve(field)) {
              return true;
            }
            field[x][y] = 0;
          }
        }
        return false;
      }
    }
  }
  return true; //if you do not return here, the function will check for more solutions
}

export function solveAble(field: Array<Array<number>>): boolean {
  let lastSet = 0;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (field[x][y] === 0) {
        for (let i = 1; i < 10; i++) {
          if (possible(x, y, i, field)) {
            lastSet = i;
            field[x][y] = i;
            if (solve(field)) {
              return true;
            }
            field[x][y] = 0;
          }
        }
        return false;
      }
    }
  }
  return lastSet === 0 ? false : true; //if you do not return here, the function will check for more solutions
}

export function printAll(field: Array<Array<number>>) {
  console.log("print all");
  printField(field);
  let n = 1;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (field[x][y] === 0) {
        for (let i = 1; i < 10; i++) {
          if (possible(x, y, i, field)) {
            field[x][y] = i;
            printAll(field);
            field[x][y] = 0;
          }
        }
        return;
      }
    }
  }
  console.log(n);
  n++;
  printField(field);
}

// printAll([
//   [0, 0, 0, 0, 7, 0, 0, 0, 0],
//   [6, 0, 0, 1, 9, 5, 0, 0, 0],
//   [0, 9, 8, 0, 0, 0, 0, 6, 0],
//   [8, 0, 0, 0, 6, 0, 0, 0, 3],
//   [4, 0, 0, 8, 0, 3, 0, 0, 1],
//   [7, 0, 0, 0, 2, 0, 0, 0, 6],
//   [0, 6, 0, 0, 0, 0, 2, 8, 0],
//   [0, 0, 0, 4, 1, 9, 0, 0, 5],
//   [0, 0, 0, 0, 8, 0, 0, 7, 9],
// ]);

export function reverseSolve(field: Array<Array<number>>): boolean {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (field[x][y] === 0) {
        for (let i = 9; i > 0; i--) {
          if (possible(x, y, i, field)) {
            field[x][y] = i;
            if (solve(field)) {
              return true;
            }
            field[x][y] = 0;
          }
        }
        return false;
      }
    }
  }
  return true; //if you do not return here, the function will check for more solutions
}

function randomRange(start = 1, end = 9): Array<number> {
  const array = new Uint32Array(1);
  let normalRange: number[] = [];
  for (let i = start; i <= end; i++) {
    normalRange.push(i);
  }
  let ret: number[] = [];
  for (let i = start; i <= end; i++) {
    const idx = window.crypto.getRandomValues(array)[0] % normalRange.length;
    ret.push(normalRange[idx]);
    normalRange.splice(idx, 1);
  }
  return ret;
}

export function solveRDM(field: Array<Array<number>>): boolean {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (field[x][y] === 0) {
        const possibleValues = randomRange(1, 9);
        possibleValues.forEach((value) => {
          if (possible(x, y, value, field)) {
            field[x][y] = value;
            if (solve(field)) {
              return true;
            }
            field[x][y] = 0;
          }
        });
        return false;
      }
    }
  }
  return true; //if you do not return here, the function will check for more solutions
}

export function badCreateSudoku(clues = 17): Array<Array<number>> {
  if (clues < 17 || clues > 75) {
    clues = 17;
  }
  let sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let cluesSet = 0;
  while (cluesSet < clues) {
    const kachelX = randomRange(0, 2);
    const kachelY = randomRange(0, 2);
    for (const kachelValueX of kachelX) {
      if (cluesSet >= clues) break;
      for (const kachelValueY of kachelY) {
        if (cluesSet >= clues) break;
        let setKachel = false;
        while (!setKachel) {
          const fieldX = randomRange(3 * kachelValueX, 3 * kachelValueX + 2);
          const fieldY = randomRange(3 * kachelValueY, 3 * kachelValueY + 2);
          let setField = false;

          for (let x of fieldX) {
            if (setField) break;
            for (let y of fieldY) {
              if (setField) break;
              if (sudoku[x][y] === 0) {
                const possibleValues = randomRange(1, 9);
                let backtrack = true;
                for (const value of possibleValues) {
                  if (possible(x, y, value, sudoku)) {
                    sudoku[x][y] = value;
                    if (solveAble(copyField(sudoku))) {
                      cluesSet++;
                      backtrack = false;
                      setKachel = true;
                      setField = true;
                      break;
                    }
                  }
                }
                if (backtrack) {
                  while (true) {
                    const xx = Math.floor(Math.random() * 9);
                    const yy = Math.floor(Math.random() * 9);
                    if (sudoku[xx][yy] !== 0) {
                      sudoku[xx][yy] = 0;
                      cluesSet--;
                      setKachel = false;
                      setField = false;
                      break;
                    }
                  }
                }
              }
            }
          }
          setKachel = true;
        }
      }
    }
  }

  return sudoku;
}

export function goodCreateSudoku(clues = 30): Array<Array<number>> {
  if (clues < 17 || clues > 75) {
    clues = 17;
  }
  let sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  setField(sudoku, 0, clues);
  console.log("done");
  return sudoku;
}

function setField(
  sudoku: Array<Array<number>>,
  clues = 0,
  targetClues = 30
): boolean {
  console.log(`clues ${clues}/${targetClues}`);
  if (clues >= targetClues) {
    return hasOneSolution(sudoku) === 1;
  }
  const values = randomRange(1, 9);
  const xValues = randomRange(0, 8);
  const yValues = randomRange(0, 8);
  for (const x of xValues) {
    for (const y of yValues) {
      if (sudoku[x][y] !== 0) continue;
      for (const value of values) {
        if (possible(x, y, value, sudoku)) {
          sudoku[x][y] = value;
          if (hasOneSolution(sudoku) > 0) {
            if (setField(sudoku, clues + 1, targetClues)) return true;
          }
          console.log("backtrack");

          sudoku[x][y] = 0;
        }
      }
      return false;
    }
  }
  return false;
}

export function newBadCreateSudoku(clues = 17): Array<Array<number>> {
  if (clues < 17 || clues > 75) {
    clues = 17;
  }
  let sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let cluesSet = 0;
  let kachelOneByOne: Array<number> = [];
  let valueOneByOne: Array<number> = [];
  while (cluesSet < clues) {
    if (kachelOneByOne.length <= 0) {
      kachelOneByOne = randomRange(0, 8);
    }
    if (valueOneByOne.length <= 0) {
      valueOneByOne = randomRange(1, 9);
    }
    const kachelOneByOneValue = kachelOneByOne.pop();
    if (kachelOneByOneValue === undefined) {
      console.error("POP ERROR");
      return [];
    }
    const kachelX = Math.floor(kachelOneByOneValue % 3);
    const kachelY = Math.floor(kachelOneByOneValue / 3);

    const x = Math.floor(Math.random() * 3) + 3 * kachelX;
    const y = Math.floor(Math.random() * 3) + 3 * kachelY;

    if (sudoku[x][y] === 0) {
      const value = valueOneByOne.pop();
      if (value === undefined) {
        console.error("POP ERROR");
        return [];
      }
      if (possible(x, y, value, sudoku)) {
        sudoku[x][y] = value;
        if (hasOneSolution(sudoku) === 1) {
          cluesSet++;
          break;
        } else {
          sudoku[x][y] = 0;
        }
      }
    }
  }
  return sudoku;
}

export function getClueCount(sudoku: Array<Array<number>>): number {
  let clues = 0;
  for (let x = 0; x < sudoku.length; x++) {
    for (let y = 0; y < sudoku[x].length; y++) {
      if (sudoku[x][y] !== 0) clues++;
    }
  }
  return clues;
}

export function getDifficultyScore(sudoku: Array<Array<number>>): number {
  const clues = getClueCount(sudoku);
  let score = 0;
  for (let x = 0; x < sudoku.length; x++) {
    for (let y = 0; y < sudoku[x].length; y++) {
      if (sudoku[x][y] !== 0) continue;
      let possibilities = 0;
      for (let value = 1; value <= 9; value++) {
        if (possible(x, y, value, sudoku)) possibilities++;
      }
      score += Math.pow(possibilities - 1, 2);
    }
  }
  return score / clues;
}

export function createSudoku(): Array<Array<number>> {
  let sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let rdmX = Math.floor(Math.random() * 3);
  let rdmY = Math.floor(Math.random() * 3);
  let rdmRange = randomRange(1, 9);
  for (let x = rdmX * 3; x < rdmX * 3 + 3; x++) {
    for (let y = rdmY * 3; y < rdmY * 3 + 3; y++) {
      const value = rdmRange.pop();
      if (value) sudoku[x][y] = value;
    }
  }
  solveRDM(sudoku);
  const originalSudoku = copyField(sudoku);
  let bestSudoku = originalSudoku;
  let bestScore = 0;
  let tries = 0;
  while (tries < 1000) {
    rdmX = Math.floor(Math.random() * 9);
    rdmY = Math.floor(Math.random() * 9);
    let value = sudoku[rdmX][rdmY];
    if (value === 0) continue;
    sudoku[rdmX][rdmY] = 0;

    if (hasOneSolution(sudoku) !== 1) {
      sudoku[rdmX][rdmY] = value;
      tries++;
      const score = getDifficultyScore(sudoku);
      if (score > bestScore) {
        bestSudoku = copyField(sudoku);
        bestScore = score;
      }
      sudoku = copyField(originalSudoku);
    }
  }
  return bestSudoku;
}

// createSudoku();

export function printField(field: Array<Array<number>>) {
  let txt = "";
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      txt += field[x][y];
    }
    txt += "\n";
  }
  console.log(txt);
}

export function copyField(field: Array<Array<number>>): Array<Array<number>> {
  const copy = field.slice();
  for (let x = 0; x < field.length; x++) {
    copy[x] = field[x].slice();
  }
  return copy;
}

export const SolutionStates = {
  NoSolution: "No Solution",
  OneSolution: "One Solution",
  MultipleSolutions: "Multiple Solutions",
  Solving: "Solving",
};

export function hasOneSolution(field: Array<Array<number>>): number {
  solvesCount = 0;
  solves(copyField(field));
  return solvesCount;
}

export function badHasOneSolution(field: Array<Array<number>>): boolean {
  const f1 = copyField(field);
  const f2 = copyField(field);
  solve(f1);
  reverseSolve(f2);

  for (let x = 0; x < f1.length; x++) {
    for (let y = 0; y < f1[x].length; y++) {
      if (f1[x][y] !== f2[x][y]) {
        console.log("unequal");
        printField(f1);
        printField(f2);
        return false;
      }
    }
  }
  return true;
}

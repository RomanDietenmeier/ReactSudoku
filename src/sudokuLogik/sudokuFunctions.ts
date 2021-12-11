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
  let normalRange: number[] = [];
  for (let i = start; i <= end; i++) {
    normalRange.push(i);
  }
  let ret: number[] = [];
  for (let i = start; i <= end; i++) {
    const idx = Math.floor(Math.random() * (normalRange.length - 1));
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

export function createSudoku(clues = 17): Array<Array<number>> {
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
              // const x = 3 * kachelValueX + Math.floor(Math.random() * 3);
              // const y = 3 * kachelValueY + Math.floor(Math.random() * 3);
              if (sudoku[x][y] === 0) {
                const possibleValues = randomRange(1, 9);
                let backtrack = true;
                for (const value of possibleValues) {
                  if (possible(x, y, value, sudoku)) {
                    sudoku[x][y] = value;
                    cluesSet++;
                    backtrack = false;
                    setKachel = true;
                    setField = true;
                    break;
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

console.log("createSudoku", printField(createSudoku()));

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

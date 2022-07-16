function getRow(puzzle, row) {
    return puzzle[row];
  }
  
  function getColumn(puzzle, col) {
    let colArr = [];
  
    for (let i = 0; i < puzzle.length; i++) {
      colArr.push(puzzle[i][col]);
    }
  
    return colArr;
  }
  
  function getSection(puzzle, x, y) {
    x *= 3;
    y *= 3;
  
    let section = [];
  
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        section.push(puzzle[i][j]);
      }
    }
  
    return section;
  }
  
  function includes1to9(arr) {
    for (let i = 1; i <= arr.length; i++) {
      if (arr.indexOf(i) === -1) {
        return false;
      }
    }
  
    return true;
  }
  
  function sudokuIsValid(puzzle) {
    let checks = [];
  
    for(let i = 0; i < 9; i++) {
      checks.push(getRow(puzzle, i));
      checks.push(getColumn(puzzle, i));
    }
  
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        checks.push(getSection(puzzle, i, j));
      }
    }
  
    for(let i = 0; i < checks.length; i++) {
      if(!includes1to9(checks[i])) { return false; }
    }
  
    return true;
  }

//checking answer w/ 2 tests

  let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(puzzle);
//should be tRUE

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p8zzle);
//should be fALSE
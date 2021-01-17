
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix === 0) {
        return [];
    }
    let newArr = [];
    for(let i = 0; i < matrix.length; i++) {
      let arrLength = matrix[i].length;
        for (let j = 0; j < arrLength; j++) {
          if (i % 2 === 0) {
                newArr.push(matrix[i][j]);
        } else {
                newArr.push(matrix[i][arrLength - 1 - j]);
            }
        }
    } 
  return newArr;
}


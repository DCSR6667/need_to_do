const searchIn2DArray=(arr, target)=> {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === target) {
                return [i, j];
            }
        }
    }
    return Infinity;
};

const arr = [[1, 2, 3], [45, 4, 5], [6, 7]];
console.log(searchIn2DArray(arr, -2));

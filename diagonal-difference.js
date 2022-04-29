#Javascript code

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is |15-17| = 2.

var leftDiagonal = 0;
var rightDiagonal = 0
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(i === j){
        leftDiagonal += arr[i][j]);
        }
    }
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if((i+j) === (arr.length - 1)){
        rightDiagonal += arr[i][j]);
        }
    }
}
return leftDiagonal - rightDiagonal

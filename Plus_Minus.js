#Javascript
arr = [1, 1, 0, -1, -1]
There are n = 5 elements, two positive, two negative and one zero. Their ratios are
2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000
Answer should below
0.400000
0.400000
0.200000

var positiveElements = 0
var negativeElements = 0
var zeroElements = 0
for(let i=0; i<arr.length; i++){
  if(a[i] > 0){
    positiveElement += 1
  }
  if(a[i] < 0){
    negativeElements += 1
  }
  if(a[i] == 0){
    zeroElements += 1
  }
}

console.log(positiveElements/arr.length)
console.log(negativeElements/arr.length)
console.log(zeroElements/arr.length)

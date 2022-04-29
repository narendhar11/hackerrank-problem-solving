#Javascript
arr = [-4, 3, -9, 0, 4, 1]
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

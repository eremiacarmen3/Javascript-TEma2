function showEvenNumbers(){
    for (let i=0; i<=10; i++){
        if (i%2=== 0){
console.log(i);
}
}
}
showEvenNumbers();

function sumOfPositiveNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= 0) {
        sum += numbers[i];
      }
    }
  
    return sum;
  }
const array =[1, -5, 20, -34, 16, 29, 36, -4];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);

const array=[3.45, -2.68, 356, -75.96, 64, 19.28];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);
  

const vowels = ["a", "e", "i", "o", "u"]
const stringdeTest=["i", "e", "e"];
console.log(stringdeTest.length)




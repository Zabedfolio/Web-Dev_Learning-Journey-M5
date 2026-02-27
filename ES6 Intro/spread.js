const max = Math.max(3,6,73,4,6,3);
// console.log(max);

const numbers = [3,6,73,4,6,3];
const max2 = Math.max(...numbers);
console.log(...numbers);
console.log(max2)

const  params = [45,12,3];
function sum(x,y,z){
    return x+y+z;
}
const result = sum(...params);
console.log(result)
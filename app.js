//Arrays
let array = [1, 2, 3, 4, 7, 8, 9];
let array2 = [1, "hi", { name: "Taha" }, [2, 3, 4, 5]];

//chenge array
array[4] = 5
array[5] = 6
array[6] = 7
//Array.isArray
let log = Array.isArray(array)
//legth
log = array.length
//indexOf
log = array.indexOf(5)
//push
array.push(8, 9, 10)
//pop
array.pop()
//unshift
array.unshift(-2, -1, 0)
//shift

array.shift()

//solise
// array.splice(0, 2)
array.splice(5, 2)
array.splice(5, 0, 4, 5)

console.log(array);
console.log(log);

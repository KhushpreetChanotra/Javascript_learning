// push 
// concat 
// spread 
// flat also give the depth 
// .isArray
// converting using .from  also use dictonary for the output 
// .of 

const array1=[0,1,2,3,4,5]
const array2=[6,7,8,9,10]


//watch the below line here it is going to print the lenght of array.push()
//console.log(array1.push())


//array1.push(array2)
//console.log(array1)



// as you can see the list will be in another list 
const hello=array1.concat(array2)

console.log("now i used concat operation", hello)
const newarray=[...array1,...array2]
console.log("now i have used flatter ",newarray)


console.log("-------------------------------------------------------")


// const of falt the list if there is list inside a list  with a depth paramter
const array=[1,2,[1,[2,3,4,[5]]]]
//there is an error if you do like this [1[2]] here undefined will come as 1 and [2]is not seprated by comma
console.log(array.flat(Infinity))


// checking if the array is present are not 

console.log(Array.isArray([1]))


// converting using from 
console.log(Array.from("khushpreet"))


// using .of 
const a=0
const b=1
const c=5
console.log(Array.of(a,b,c))
const myArr=[0,1,2,3,4,5,'ture',"hitesh"]
console.log(myArr[2])
myArr.push("hello world")
console.log(myArr)
myArr.pop()
console.log(myArr)


// this is an method unshift which insert the value in the start of the array
myArr.unshift("firstplace")
console.log(myArr)
// shif is used for poping 


// converting this into stiring using joins
const s=myArr.join()
console.log(s)


//methods -slice and splice

// dekh bhai slice mey bo wala portion  nahi nikal jayga but in splice  bo nikal jauyga 

const arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)

console.log("B",arr.slice(0,2))
console.log(arr)
console.log("c",arr.splice(0,2))
console.log(arr)



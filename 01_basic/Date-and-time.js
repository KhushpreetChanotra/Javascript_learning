// 1970 jan dates is calucated in millisecond on mnd 
let mydate = new Date() 
console.log(mydate.toString())



// there are also many methods avaiable in mydates and they are below 
//these all methods are here to perform some basic operation on dates

console.log(mydate.toISOString())
console.log(mydate.toJSON())

// ** date is a javascript object as this code is going to proof it when you will run it on compiler

console.log(typeof mydate)


let mycreatedate = new Date(2023,0,23)
// here on in date you can see the months starts from 0 which means january

console.log(mycreatedate.toDateString())


// dates can be inserted in mm-dd-yyyy format or yyyy-dd-mm  these format also 
let mycreatedate1 = new Date("2023-01-14")
console.log(mycreatedate1.toDateString())


// also mm-dd-yyyy also can be followed by same 





/* timestamp can be used here it  usin .now() */


let timestampcheck =Date.now()
console.log(timestampcheck)
//converting these into second for checking purpose

console.log(Math.floor(timestampcheck/1000))




// there are also methods which are used to get months,day , year easily which are showen below

let newdate = new Date()


console.log(newdate.getMonth())
console.log(newdate.getDay())



// an interserting method .tolocalstring()is an intersting method 



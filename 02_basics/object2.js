//const tinderuser=new Object() this type of decleartaion is called singleton 
const tinderuser=
{a:1,
b:2,
c:3,
d:4
} 
//console.log(tinderuser)

// merge two object 
const obj1={a:1,b:2,c:3}
const obj2={d:1,e:2,e:4}


//const obj3=Object.assign({},obj1,obj2)
// its an static method 
// in the synatx of object.assign ({target},{source},.....,{nsource})
const obj3={...obj1,...obj2}


console.log(obj3)
// another way of combining the object is spreading 


/// isne ak synatax batya jab database se values aati hai


// i am going to check the nested feature of object 

const o={
    a:{
        b:{
           h:"how are you hello world"
        }
    }
}
console.log(o.a.b.h)

// object in an array which will come many times in real work
const arr=[
    {id:'75211',
     name:'khushpreet '},
     {id:'75211',
     name:'khushpreet '}
]
console.log(arr[0].id)
console.log(Object.keys(o))

// destructring object values thoda time lena wala hai 
const bo={
    name:'Khuspreet Chanotra',
    status:'single bura wala',
    doing: "coding"
}

// constcept of destructuring 
const {doing:d}=bo
console.log(d)


// handling api 
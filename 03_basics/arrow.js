// this keyword will tell you about the currunt context
const k={
    name:'khushpreet Chanotra',
    college :"bvcoe",
    metalcondition:function(){
        console.log(`${this.name} is doing coding right now`)
        console.log(this)
    }
}
k.metalcondition()
k.name='sherya'
k.metalcondition()



// these are some lines which will show this keybword inisde and outside the object c

console.log(this)

// when you are in node env the you will get an object but when you are in browser then the object is global


// **************remember one thing this keyword only used by ojects not in function as it
// as it will an undefiend value as shown in the example

console.log("....................................................................")
const h=function(){
     let c='khushpreet'
     console.log(this.c)
}
h()

console.log('...................arrow fucntion..................................')

const a=()=>{
    let c='khushpreet'
    console.log(this)
}
a()

console.log('................arrow fucniton with paramenters....................')

const addtwo=(num1,num2)=>{
        return num1+num2
}

console.log(addtwo(1,2))
console.log('..............add two using implicit return.........................')

const addtwo2=(num1,num2)=> num1+num2;// if you will use () then you don't have to use return 

console.log(addtwo2(2,3))

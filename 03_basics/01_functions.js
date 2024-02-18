function username(name){// if you have to override then (name ="hello world ")
    if(!name){// this line is to check if there is no arugment then it it return undefined 
        return "this is not a valid username"
    }
    return `hello ${name} how are you`
}
console.log(username('Khushpreet'))



// spread opreator in js is called rest operator in first line 
function mutliplier(...num){
    return num.map(x => x * 3)
}
console.log(mutliplier(1,2,3,4,5,6,7,8,9))

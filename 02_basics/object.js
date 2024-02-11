// singleton 
// when you declare something like literals then singleton is not formed
// here also i am going to use a symbol as a key in my object 

const sys=Symbol("key1")

const userinfo={
      name:"khushpreet",
      college:"bvcoe",
      address:'shivaji park',
      [sys]:"mykey1",// it is important to note that symbol in keys is declared as in []
      "full name":"khushpreet chanotra",
      // to access full name its is in string and in the output [] is used to acces it not . (dot)
      email:'khushpreetchanotra8095@gamil.com',
      age:21
}
console.log(userinfo.address)
console.log(userinfo["full name"])
console.log(userinfo[sys])// it is the syntax where i used [] to call the symbol
// hence the symbol is used as a key in object 

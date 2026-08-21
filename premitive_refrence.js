// primitive
// string ,number,null,undefine.
// reference type
// functions ,objects, arrays


let name = "husnain"     // here we basically create copy of that variable in memory we do not point the same to name 2
let name2 = name
name2 = 'ali'
console.log(name,name2)
// Reference type
let user = {
    name:"awais"
}
let user2 = user     // here we point the user2 to the same user object nto created a new copy
user2.name = "awais2"
console.log(user2,user)
// to create copy we can use destructuring like

let user3 = {
    age : 40
}
let user4 = {...user3}
user4.age = 41
console.log(user4,user3)



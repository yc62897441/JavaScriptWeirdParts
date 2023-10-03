let e

b() // Called b!
console.log(a) // undefined
console.log(c) // Cannot access 'c' before initialization
console.log(d) // d is not defined
console.log(e) // undefined

var a = 'Hello World!'
function b() {
    console.log('Called b!')
}
let c = 'This is c'
e = 'This is e'

console.log(e) // This is e

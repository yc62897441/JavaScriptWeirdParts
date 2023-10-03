// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean('')) // false

var a
// fetch data and assign to a
if (a) {
    console.log('Something is there.')
}
if (a || a === 0) {
    console.log('Something is there.')
}

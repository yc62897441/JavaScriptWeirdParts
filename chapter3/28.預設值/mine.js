function greet(name) {
    name = name || ' <Your name here>'
    console.log('Hello' + name)
}
greet()

console.log(undefined || 1) // 1
console.log(null || 'Hi') // Hi
console.log('' || 'Hi') // Hi
console.log(false || 'Hi') // Hi
console.log(true || 'Hi') // true
console.log('Hello' || 'Hi') // Hello

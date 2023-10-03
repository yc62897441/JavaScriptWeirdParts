console.log('c0:', c) // c is not defined

function a() {
    console.log('c1:', c) // undefined
    var c
    c = 'c'
    console.log('c2:', c) // c
    b()
}

function b() {
    console.log('c3:', c) // c is not defined
    var d
    console.log('d1:', d) // undefined
}

a()
var d
console.log('d2:', d) // undefined
console.log('c4:', c) // c is not defined

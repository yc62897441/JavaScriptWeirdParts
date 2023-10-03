function b() {
    console.log('myVar', myVar) // 1
}

function a() {
    var myVar = 2
    b()
}

var myVar = 1
a()
// =============================
function d() {
    console.log('myVar2', myVar2) // 3
}

function c() {
    let myVar2 = 4
    d()
}

let myVar2 = 3
c()

function b(myVar4) {
    var myVar
    console.log('myVar_3', myVar) // undefined
    // console.log('myVar3_1', myVar3) // myVar3 is not defined
    console.log('myVar4_1', myVar4) // 4
}

function a() {
    var myVar = 2
    var myVar3 = 3
    var myVar4 = 4
    console.log('myVar_2', myVar) // 2
    console.log('myVar2_1', myVar2) // 2
    b(myVar4)
}

var myVar = 1
var myVar2 = 2
console.log('myVar_1', myVar) // 1
a()
console.log('myVar_4', myVar) // 1

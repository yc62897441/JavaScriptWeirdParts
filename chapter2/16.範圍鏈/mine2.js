function a() {
    function b() {
        console.log('myVar', myVar) // 2
    }

    var myVar = 2
    b()
}

var myVar = 1
a()
b() // b is not defined

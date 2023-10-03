function appendArr(arr) {
    arr.push(3)
    let a = Math.floor(Math.random() * 10)
    return a
}

const arr = [0, 1, 2]
console.log('arr', arr) // [ 0, 1, 2 ]

console.log(appendArr(arr)) // random ex. 3
console.log('arr', arr) // [ 0, 1, 2, 3 ]

console.log(appendArr(arr)) // random ex. 6
console.log('arr', arr) // [ 0, 1, 2, 3, 3 ]

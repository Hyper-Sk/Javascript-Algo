let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 9, 9, 9];


function uniqueCount(array) {
    let x = 0;
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++){
            if (array[x] !== array[i]) {
                x++;
                array[x] = array[i]
            }
        }
        return x + 1;
    } else {
        throw new Error('Array is empty...')
    }
}


let result = uniqueCount(arr)
// console.log(result)






// function checkUnique(array) {
//     let base = 0
//     for (i = 0; i < array.length; i++){
//         console.log(i)
//     }
// }

// let newResult = checkUnique(arr)
// console.log(result)




let newArr = [1, 3, 4, 5, 4, 4, 3,3,3,3, 6, 6]

function count(array) {

    let sorted = new Set(array)
    return [...sorted].length
    
}

// countResult = count(newArr)
// console.log(countResult)




let newArr_2 = [1, 3, 4, 5, 4, 4, 3, 3, 3, 3, 6, 6]

function CheckCount(array) {
    let myArr = []
    for (let curr of array) {
        for (let i = 0; i < array.length; i++){
            if (!myArr.includes(array[i])) {
                currResult = myArr.push(array[i])
            }
        }
    }
    // return myArr
    return myArr.length
}

newArrResult = CheckCount(newArr_2)
console.log(newArrResult)

// find sum zero | problem 1
// required output => [-4,4]
let arr = [-5, -4, -3, -1, 0, 1, 4, 6];

// function checkSumZero(array) {
//     for (let num of array) {
//         for (let i = 0; i < array.length; i++) {
//             if (num + array[i] === 0) {
//                 return [num, array[i]]
//             }
//         }
//     }
// }


function checkSumZero(arr) {
    for(let num of arr) {
        for(let i = 0; i < arr.length; i++){
            if (num + arr[i] === 0) {
               return [num,arr[i]];
            };
        }
    };
};

let result = checkSumZero(arr);
console.log(result);

// o[n^2] quatratic (time complex) above 
// coz it uses 2 loops 






// o[n] linear below
// it only using one loop

// function checkSumPair(array) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left < right) {
//         let sum = array[left] + array[right];
//         if (sum === 0) {
//             return [array[left], array[right]];
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }

// }

// let result_2 = checkSumPair(arr)
// console.log(result_2)


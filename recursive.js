
// recursive steps
// 1.) define base/edge cases
// 2.) do work assuming that the rest of the work will be handled appropriately in the recursive call
//     (yes, it is weird but it will make sense the more you do it)

function forwardAndBackward(array){

  if(array.length === 0)
    return;

  let step = 1;
  let index = 0;

  while(index >= 0){

    if(index === array.length - 1)
      step = -1;

    console.log(array[index]);
    index += step;
  }
}

function recursiveHelper(arr, index){

  // base case/edge case: last element in array
  if(index === arr.length-1){

    console.log(arr[index]);
    return;
  }

  console.log(arr[index]);
  recursiveHelper(arr, index + 1);
  console.log(arr[index]);
}

function recursive(arr){

  // base case/edge case: array is empty
  if(arr.length === 0)
    return;

  recursiveHelper(arr, 0);
}

function fib(num){

  // edge case: num === 0; return 0
  if(num === 0)
    return 0;

  // edge case: num <= 2; return 1
  if(num <= 2)
    return 1;

  // calculate last two fibonacci numbers
  let prev = fib(num - 1);
  let morePrev = fib(num - 2);

  // add and return last two fibonacci numbers
  return prev + morePrev;
}

// console.log(fib(0));   // -> 0
// console.log(fib(1));   // -> 1
// console.log(fib(2));   // -> 1

// console.log(fib(5));    // -> 5

// console.log(fib(12));   // -> 144

// fib(3)
//   fib(2)
//   fib(1)

// fib(5)
//    fib(4)
//        fib(3)
//            fib(2)
//            fib(1)
//    fib(3)
//        fib(2)
//        fib(1)

// [0, 1, 1, 2, 3, 5]

// let arr = [];
// let arr1 = [3];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// forwardAndBackward(arr);
// forwardAndBackward(arr1);
// forwardAndBackward(arr2);
// forwardAndBackward(arr3);

// recursive(arr2);

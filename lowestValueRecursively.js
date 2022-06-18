// If you are still having trouble understanding recursive functions and how to divide and
// conquer, do ***NOT*** look at this example. It may complicate things.


// Create a function that takes in an array and returns the minumum value of the array.
// This is a little too easy using reduce or a loop, so we will make it a little more difficult by using divide and
// conquer.
//
// To solve this problem, I will divide the array in two and find the minimum value of each half but I will continue
// to do this for each subsequent half. This is one way of dividing and conquering this problem.
//
// Examples
// fib([]) -> null, because there are no values
// fib([6]) -> 6
// fib([2, 1, 3]) -> 1
// fib([5, -10, 15, 100, 3, -9, 223978, 0]) -> -10
// fib([0, -99, 100, 54, 1, -19675]) -> -19675

// Finds the minimum element in the array from index low to high using recursion
function recursiveMinOfArrayHelper(array, low, high){

  // base case: only one element to check, so it is the lowest element in the current array
  if(low === high) return array[low];

  // get the index of the middle element
  let mid = low + Math.floor((high - low) / 2);

  // now we will divide the array in half into two smaller arrays(approaching the base case)

  // get the minimum element of the array from indexes low to mid
  let lowMin = recursiveMinOfArrayHelper(array, low, mid);

  // get the minimum element of the array from the indexes mid + 1 to high
  let highMin = recursiveMinOfArrayHelper(array, mid + 1, high);

  // assume that the recursive calls have properly provided the
  // lowest value in the first half of the array and the lowerst value in the
  // second half of the array

  // return the lowest value
  return lowMin < highMin ? lowMin : highMin;
}

function recursiveMinOfArray(array){

  // base case: array is empty, return null since no min value
  if(array.length === 0)
    return null;

  // call the minOfArrayHelper function with appropriate starting, and ending indexes
  return recursiveMinOfArrayHelper(array, 0, array.length - 1);
}


console.log('------------------------------------------------');
console.log('Testing recursive min of array function');
console.log('------------------------------------------------');
console.log('recursiveMinOfArray([])');
console.log('   expected:', 'null');
console.log('     actual:', recursiveMinOfArray([]));
console.log('recursiveMinOfArray([6])');
console.log('   expected:', '6');
console.log('     actual:', recursiveMinOfArray([6]));
console.log('recursiveMinOfArray([2, 1, 3])');
console.log('   expected:', '1');
console.log('     actual:', recursiveMinOfArray([2, 1, 3]));
console.log('mrecursiveMinOfArray([5, -10, 15, 100, 3, -9, 223978, 0])');
console.log('   expected:', '-10');
console.log('     actual:', recursiveMinOfArray([5, -10, 15, 100, 3, -9, 223978, 0]));
console.log('recursiveMinOfArray([0, -99, 100, 54, 1, -19675])');
console.log('   expected:', '-19675');
console.log('     actual:', recursiveMinOfArray([0, -99, 100, 54, 1, -19675]));

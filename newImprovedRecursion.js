
// Things to know about recursion
//
// --- EVERY problem that can be solved with a for/while loop(iteratively) can also be solved recursively
//
// --- EVERY problem that can be solved recursively can also be solved using a for/while loop(iteratively)
//
// --- some problems are easier to solve using for/while loops(iteratively) and some problems are easier to solve using
//     recursion
//
// --- recursion is a very weird topic when you first see it. to get a better understanding of recursion, review how some problems have been solved
//     using recursion and try to recreate them yourself. as you solve more of these problems they will become easier.

// tips to solve a problem using recursion
//
// 1. think about the problem and how you would solve the problem using recursion
// 2. define base/edge cases first within the recursive function
// 3. do work after the base/edge cases assuming that the rest of the work will be handled properly in the subsequent recursive calls
//    (yes, it is weird but it will make more sense the more that you do it)
// 4. when recursing be sure that you are approaching the base case(if you do not approach a base case, then you created an infinite loop)


// Create a function that takes in a number, and returns the sum of all positive numbers
// less than and equal to the provided number
//
// Examples
// add(0) -> 0
// add(1) -> 1
// add(2) -> 3
// add(5) -> 15
// add(9) -> 45

function add(num){

  let sum = 0;

  for(let i = 0; i <= num; i++)
    sum += i;

    return sum;
}

function addRecursive(num){

  // base case: num === 0; return 0
  if(num === 0)
    return 0;

  // recursive call that gets closer to base case;
  return num + addRecursive(num - 1);
}

// console.log('------------------------------------------------');
// console.log('Testing iterative add function');
// console.log('------------------------------------------------');
// console.log('add(0) ->', add(0), '; expected result:', 0);
// console.log('add(1) ->', add(1), '; expected result:', 1);
// console.log('add(2) ->', add(2), '; expected result:', 3);
// console.log('add(5) ->', add(5), '; expected result:', 15);
// console.log('add(9) ->', add(9), '; expected result:', 45);

console.log('------------------------------------------------');
console.log('Testing recursive add function');
console.log('------------------------------------------------');
console.log('addRecursive(0) ->', addRecursive(0), '; expected result:', 0);
console.log('addRecursive(1) ->', addRecursive(1), '; expected result:', 1);
console.log('addRecursive(2) ->', addRecursive(2), '; expected result:', 3);
console.log('addRecursive(5) ->', addRecursive(5), '; expected result:', 15);
console.log('addRecursive(9) ->', addRecursive(9), '; expected result:', 45);

// Create a function that takes in an array of numbers, loops through the numbers in the array
// both forward and backwards and adds the numbers to a string separated by spaces. Additional
// spaces at the end of the string is ok.
//
// Examples
// fAndB([]) -> ''
// fAndB([6]) -> '6'
// fAndB([1, 2, 3]) -> '1 2 3 2 1'
// fAndB([1, 2, 3, 4, 5, 6, 7]) -> '1 2 3 4 5 6 7 6 5 4 3 2 1'
// fAndB([0, -99, 100, 54, 1, -19675]) -> '0 -99 100 54 1 -19675 1 54 100 -99 0'

function fAndB(array){

  if(array.length === 0)
    return '';

  let step = 1;
  let index = 0;
  let result = '';

  while(index >= 0){

    if(index === array.length - 1)
      step = -1;

    result += array[index] + ' ';
    index += step;
  }

  return result;
}

function recursiveFAndBHelper(arr, index){

  // base case/edge case: last element in array
  if(index === arr.length-1)
    return arr[index] + ' ';

  let str = arr[index] + ' ';
  str += recursiveFAndBHelper(arr, index + 1);
  str += arr[index] + ' ';

  return str;
}

function recursiveFAndB(arr){

  // base case/edge case: array is empty
  if(arr.length === 0)
    return '';

  return recursiveFAndBHelper(arr, 0);
}



// console.log('------------------------------------------------');
// console.log('Testing iterative forward and backward function');
// console.log('------------------------------------------------');
// console.log('fAndB([])');
// console.log('   expected:', '');
// console.log('     actual:', fAndB([]));
// console.log('fAndB([6])');
// console.log('   expected:', '6');
// console.log('     actual:', fAndB([6]));
// console.log('fAndB([1, 2, 3])');
// console.log('   expected:', '1 2 3 2 1');
// console.log('     actual:', fAndB([1, 2, 3]));
// console.log('fAndB([1, 2, 3, 4, 5, 6, 7])');
// console.log('   expected:', '1 2 3 4 5 6 7 6 5 4 3 2 1');
// console.log('     actual:', fAndB([1, 2, 3, 4, 5, 6, 7]));
// console.log('fAndB([0, -99, 100, 54, 1, -19675])');
// console.log('   expected:', '0 -99 100 54 1 -19675 1 54 100 -99 0');
// console.log('     actual:', fAndB([0, -99, 100, 54, 1, -19675]));

console.log('------------------------------------------------');
console.log('Testing recursive forward and backward function');
console.log('------------------------------------------------');
console.log('recursiveFAndB([])');
console.log('   expected:', '');
console.log('     actual:', recursiveFAndB([]));
console.log('recursiveFAndB([6])');
console.log('   expected:', '6');
console.log('     actual:', recursiveFAndB([6]));
console.log('recursiveFAndB([1, 2, 3])');
console.log('   expected:', '1 2 3 2 1');
console.log('     actual:', recursiveFAndB([1, 2, 3]));
console.log('recursiveFAndB([1, 2, 3, 4, 5, 6, 7])');
console.log('   expected:', '1 2 3 4 5 6 7 6 5 4 3 2 1');
console.log('     actual:', recursiveFAndB([1, 2, 3, 4, 5, 6, 7]));
console.log('recursiveFAndB([0, -99, 100, 54, 1, -19675])');
console.log('   expected:', '0 -99 100 54 1 -19675 1 54 100 -99 0');
console.log('     actual:', recursiveFAndB([0, -99, 100, 54, 1, -19675]));



// Create a function that takes in a number n and returns the nth fibonacci number.
//
// Let the fibonacci numbers be a sequence of numbers defined below.
// fib(0) -> 0
// fib(1) -> 1
// fib(n) = fib(n - 1) + fib(n - 2)
//
// The first fibonacci numbers are:
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...]
//
// If you still aren't sure what a fibonacci number is, because the explanation
// above is very mathy, then see the wikipedia page here:
//
// https://en.wikipedia.org/wiki/Fibonacci_number
//
// or find a youtube video better explaining them.
//
// Examples
// fib(0) -> 0
// fib(1) -> 1
// fib(4) -> 3
// fib(7) -> 13
// fib(11) -> 89

function fib(num){

  if(num === 0)
    return 0;

  if(num <= 2)
    return 1;

  let morePrev = 1;
  let prev = 1;

  for(let i = 3; i <= num; i++){

    let sum = prev + morePrev;
    morePrev = prev;
    prev = sum;
  }

  return prev;
}

function recursiveFib(num){

  // edge case: num === 0; return 0
  if(num === 0)
    return 0;

  // edge case: num <= 2; return 1
  if(num <= 2)
    return 1;

  // calculate last two fibonacci numbers by recursively calling this function
  // and approaching the base case
  let prev = fib(num - 1);
  let morePrev = fib(num - 2);

  // add and return last two fibonacci numbers
  return prev + morePrev;
}

// console.log('------------------------------------------------');
// console.log('Testing iterative fib function');
// console.log('------------------------------------------------');
// console.log('fib(0) ->', fib(0), '; expected result:', 0);
// console.log('fib(1) ->', fib(1), '; expected result:', 1);
// console.log('fib(4) ->', fib(4), '; expected result:', 3);
// console.log('fib(7) ->', fib(7), '; expected result:', 13);
// console.log('fib(11) ->', fib(11), '; expected result:', 89);

console.log('------------------------------------------------');
console.log('Testing recursive fib function');
console.log('------------------------------------------------');
console.log('recursiveFib(0) ->', recursiveFib(0), '; expected result:', 0);
console.log('recursiveFib(1) ->', recursiveFib(1), '; expected result:', 1);
console.log('recursiveFib(4) ->', recursiveFib(4), '; expected result:', 3);
console.log('recursiveFib(7) ->', recursiveFib(7), '; expected result:', 13);
console.log('recursiveFib(11) ->', recursiveFib(11), '; expected result:', 89);

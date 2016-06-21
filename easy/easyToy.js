//----------------------------------------------------------------------------------------------//
//Write a function called ABCheck that takes a string parameter and return true
// if the characters a and b are separated by exactly 3 places anywhere
// in the string at least once (ie. "lane borrowed" would result in true
// because there is exactly three characters between a and b).
// Otherwise return false.
//----------------------------------------------------------------------------------------------//

var ABCheck = function(str){
  return str.match(/a...b/g) !== null;
}

var test1 = 'lane borrowed' // should return true
var test2 = 'laneborrowed' // should return false
var test3 = 'any big string' // should return true
var test4 = 'boy are these toy problems neat' // should return true
var test5 = 'boyare these toy problems neat' // should return false

ABCheck(test1);



//----------------------------------------------------------------------------------------------//
// write a function that takes in a string, and returns that string with all
// its letters in alphabetal order. assume there will be no punctuation or
// numbers. example: `alphabet('hello')` // => 'ehllo'
//----------------------------------------------------------------------------------------------//


var strSort = function(str){
  return str.split('').sort().join('');
}

var test1 = "alphabet";
var test2 = "hello";
var test3 = "DevMountain"

console.log(strSort(test1));


//----------------------------------------------------------------------------------------------//
// reverse an array
//----------------------------------------------------------------------------------------------//

var arrReverser = function(arr){
  return arr.reverse();
}

var test1 = [1, 2, 3, 4, 5];
var test2 = [5, 4, 3, 2, 1];

console.log(arrReverser(test1));


//----------------------------------------------------------------------------------------------//
// Write a function called combinator that is given two arrays as arguments.
// The first array is an array of first names, and the second array is an
// array of last names. Have the function return a new array combining
// the first names and the last names.

// combinator([‘Jason', ‘Dan’, ‘Cahlan’], [‘Turner’, ‘Kesler’, ‘Sharp’]); →
// [‘Jason Turner’, ‘Dan Kesler’, ‘Cahlan Sharp’];
//----------------------------------------------------------------------------------------------//

var firstNames = ['Jason', 'Dan', 'Cahlan'];
var lastNames = ['Turner', 'Kesler', 'Sharp'];

function combinator (first, last) {
  return first.map(function(item, index){
    return item + " " + last[index]
  })
}

console.log(combinator(firstNames, lastNames));

// // CHALLENGE 1 :  LONGEST WORD
// // RETURN THE LONGEST WORD OF A STRING
// // if more than one the put into an Array

// function longestWord(sen) {
// 	// create a filttered array
// 	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

// 	// sort by length
// 	const sorted = wordArr.sort((a, b) => b.length - a.length);

// 	// if multiple word put into array
// 	const longestWordArr = sorted.filter(
// 		(word) => word.length === sorted[0].length
// 	);

// 	// check if more than one word in the Array
// 	if (longestWordArr.length === 1) {
// 		// return the word
// 		return longestWordArr[0];
// 	} else {
// 		return longestWordArr;
// 	}
// }
// const output = longestWord("Hello there, my name is Caeser");

// console.log(output);

// //////////////////////////////////////////////

// challenge 2 : array chunking
// split an array into chunked array of a specific length
// ex chunkedArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]

// function chunkedArray(arr, len) {
// 	/////   SOLUTION 1
// 	// initilaize chunked array
// 	const chunkedArr = [];
// 	// set index for the loop
// 	let i = 0;
// 	// loop while index is less than the array length
// 	while (i < arr.length) {
// 		//slice out from the index to the index + the chunk length and
// 		// push to the chunked array
// 		chunkedArr.push(arr.slice(i, i + len));
// 		// increment by the chunk length
// 		i += len;
// 	}
// 	return chunkedArr;
// }
// const output = chunkedArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);

/////////////

////  SOLUTION 2
// function chunkedArray(arr, len) {
// 	// init the chunked arr
// 	const chunkedArr = [];
// 	// loop throught the original array
// 	arr.forEach(function (val) {
// 		//get the last element(array) in the chunked array
// 		const last = chunkedArr[chunkedArr.length - 1];
// 		// check if there is a last and if the last length is equal to the chunked length parameter
// 		if (!last || last.length === len) {
// 			chunkedArr.push([val]);
// 		} else {
// 			last.push(val);
// 		}
// 	});
// 	return chunkedArr;
// }

// const output = chunkedArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);

////////////////////////////////////////

// CHALLANGE 3: FLATTEN ARRAY
// FLATTEN AN ARRAY OF ARRAYS TO A SINGLE ARRAY

// function flattenArray(arrays) {
// 	///// SOLUTION 1
// 	return arrays.reduce(function (a, b) {
// 		// a is the starting point(first array)  and  b is the iteration
// 		return a.concat(b);
// 	});
// }

// const output = flattenArray([
// 	[1, 2],
// 	[3, 4],
// ]);
// console.log(output);
////  arrow function   return arrays.reduce((a, b) => a.concat(b));
///////////////////

////// SOLUTION 2

// function flattenArray(arrays) {
// 	return [].concat.apply([], arrays);
// }

// const output = flattenArray([
// 	[1, 2],
// 	[3, 4],
// ]);
// console.log(output);

////////////
////// SOLUTION 3

// function flattenArray(arrays) {
// 	return [].concat(...arrays);
// }
// const output = flattenArray([
// 	[1, 2],
// 	[3, 4],
// ]);

// console.log(output);

////////////////////////////////////////

////CHALLENGE 4: ANAGRAM
/// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/// For example, the word anagram itself can be rearranged into nag a ram, also the word binary into brainy and the word adobe into abode.
// return true or false

// function isAnagram(str1, str2) {
// 	return formatStr(str1) === formatStr(str2);
// }

// // creating a helper function
// function formatStr(str) {
// 	return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// const output = isAnagram("elbow", "below#");
// console.log(output);

///////////////////////////////////////////////

// CHALLENGE 5: LETTER CHANGE
// CHANGE EVERY LETTER OF THE STRING TO THE ONE THAT FOLLOWS
//  IT IN THE ALPHABET AND CAPITALIZE THE VOWELS
//    z should turn to a
//  ex. 'hello there' === 'Ifmmp UIfsf'

// function letterChange(str) {
// 	let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
// 		if (char === "z") {
// 			return "a";
// 		} else {
// 			return String.fromCharCode(char.charCodeAt() + 1);
// 		}
// 	});
// 	newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
// 		return vowel.toUpperCase();
// 	});
// 	return newStr;
// }

// const output = letterChange("hello there");

// console.log(output);

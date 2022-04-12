// CHALLENGE 1 :  LONGEST WORD
// RETURN THE LONGEST WORD OF A STRING
// if more than one the put into an Array

function longestWord(sen) {
	// create a filttered array
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

	// sort by length
	const sorted = wordArr.sort((a, b) => b.length - a.length);

	// if multiple word put into array
	const longestWordArr = sorted.filter(
		(word) => word.length === sorted[0].length
	);

	// check if more than one word in the Array
	if (longestWordArr.length === 1) {
		// return the word
		return longestWordArr[0];
	} else {
		return longestWordArr;
	}
}
const output = longestWord("Hello there, my name is Caeser");

console.log(output);

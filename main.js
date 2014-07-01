// Problem 1: Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var getName = function (person) {
	return person.name;
}

/* Problem 2: Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
totalLetters(['javascript', 'is', 'awesome']) should return 19
totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24*/
var totalLetters = function(arr){
	var letterTotal = 0;
	for (var i=0; i<arr.length; i++){
		letterTotal += arr[i].length;
	}return letterTotal;
}


/* Problem 3: Write a function called 'keyValue' which takes two arguments and returns an object with a key of the first argument and the value of the second argument.
keyValue('city', 'Denver') should return Object {city: "Denver"}*/

var keyValue = function(key, value){
	var o = {};
	o[key] = value;
	return o;
}

/*Problem 4: Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'*/

var negativeIndex = function(arr,num){
	return arr[arr.length + num];
}

/*Problem 5 Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function should return the new string.
removeM('family') should return 'faily'
removeM('memory') should return 'eory'*/

var removeM = function (str){
	var newStr = '';
	for (var i=0; i<str.length; i++){
		if ((str[i]!='m')&&(str[i]!="M")){
			newStr += str[i];
		} 
	}return newStr;
}


/* Problem 6: Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
printObject({ a: 10, b: 20, c: 30 }) should print:
a is 10
b is 20
c is 30
printObject({ firstName: 'pork', lastName: 'chops' }) should print:
firstName is pork
lastName is chops*/

var printObject = function(obj) {
	for (var key in obj){
		console.log(key + ' is '+ obj[key]);
	}
}

/* Problem 7: Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
vowels('alabama') should return ['a', 'a', 'a', 'a']
vowels('What lets in youth?') should return ['a', 'e', 'i', 'o', 'u']*/

var vowels = function (str) {
	str=str.toLowerCase();
	var vowelArr = [];
	for (var i=0; i<str.length; i++){
		if ((str[i] == 'a')||(str[i] == 'e')||(str[i] == 'i')||(str[i] == 'o')||(str[i] == 'u')){
			vowelArr.push(str[i]);
		}
	}return vowelArr;
}

/* Problem 8: Write a function called 'twins' which takes an array and returns true if every pair of items in the array is the same.
twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
twins(['a', 'a', 'b', 'z']) should return false
twins(['a', 'a', 'b']) should return false
twins(['a', 'a', 'b', undefined]) should return false*/

var twins = function(arr){
	// return false if array has odd length
	if (arr.length%2 !=0) return false;
	// loop through array elements & for elements with odd index, test if that element is twins with prior element;
	for (var i=0; i<arr.length; i++){
		if ((i%2 == 1) && (arr[i] != arr[i-1] )) return false;
	}return true;
}
/* Problem 9: Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
or([false, false, true, false]) should return true
or([false, false, false]) should return false
or([]) should return false*/

var or = function(arr){
	for (var i=0; i<arr.length; i++){
		if (arr[i]) return true;
	}return false;
}

/* Problem 10: Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']*/
	var unique = function (arr){
		var newArr = [];
		for (var i=1; i<arr.length; i++){
			for (var j=0; j<i; j++){
				if arr[i]!=arr[j]{
					newArr.push(arr[i]);
				}

		}
	}
let LinkedList = require("./linkedlist.js");
let Dictionary = require("./dictionary.js");
let StringBuilder = require("./stringbuilder.js");
let Matrix = require("./matrix.js")

/**
 * Warzone Zombies - Total Calc
 *
 * @param      {number}  num     The number of total people at the beginning of the game.
 * @return     {number}  The total number of zombies spawned.
 */
function zombie(num) {
	matrix = [];
	alive = num;
	dead = 0;
	zombie = 0;
	tot_zombies = 0;
	stims = 0;
	while(alive > 0) {
		alive--;
		stims++;
		zombie++;
		tot_zombies++;
		if(stims==2) {
			alive++;
			zombie--;
			stims=0;
		}
	}
	return tot_zombies;
}

/**
 * Is Unique - Using Array
 *
 * @param      {string}   str     The string.
 * @return     {boolean}  If unique.
 */
function ch1_1a(str) {
	let lookup = [];
	let alphabet = 26;
	for(i = 0; i < str.length; i++) {
		let n = str.charCodeAt(i);
		let index = n % alphabet;
		if(lookup[index] == str.charAt(i)) {
			return false;
		}
		lookup[index] = str.charAt(i);
	}
	return true;
}

/**
 * Is Unique - No Data Structure
 *
 * @param      {string}   str     The string.
 * @return     {boolean}  If unique.
 */
function ch1_1b(str) {
	for(i = 0; i < str.length - 1; i++) {
		for(j = str.length - 1; j > 0; j--) {
			let a = str.charAt(i);
			let b = str.charAt(j);
			if(i != j && a == b){
				return false;
			}
		}
	}
	return true;
}

/**
 * Check Permutation
 *
 * @param      {string}   str1    The first string.
 * @param      {string}   str2    The second string.
 * @return     {boolean}  If the first string is a permutation of the second string.
 */
function ch1_2(str1, str2) {
	let lookup = [];
	let alphabet = 26;
	for(i = 0; i < str1.length; i++) {
		let n = str1.charCodeAt(i);
		let index = n % alphabet;
		if(lookup[index] === undefined) {
			lookup[index] = 1;
		} else {
			lookup[index]++;
		}
	}
	for(j = 0; j < str2.length; j++) {
		let n = str2.charCodeAt(j);
		let index = n % alphabet;
		if(lookup[index] === undefined) {
			return false;
		} else {
			if(lookup[index] == 1) {
				lookup[index] = undefined;
			} else {
				lookup[index]--;
			}
 		}
	}
	return true;
}

/**
 * URLify - In Place
 *
 * @param      {<type>}    str     The string, must be exact size for URL.
 * @param      {number}    n       The true length of the string.
 * @return     {string}  The URL version of the string.
 */
function ch1_3(str, n) {
	let arr = str.split("");
	let c = 0;
	for(i = 0; i < n; i++) {
		if(arr[i] == " ") {
			c++;
		}
	}
	let k = n - 1;
	let j = arr.length - 1;
	while(k >= 0) {
		if(arr[k] != " ") {
			arr[j] = arr[k];
			j--;
		} else {
			arr[j] = '0';
			arr[j-1] = '2';
			arr[j-2] = '%';
			j=j-3;
		}
		k--;
	}
	return arr.join('');
}

/**
 * Palindrome Permutation
 *
 * @param      {string}   str     The string
 * @return     {boolean}  If the string can be rearranged as a palindrome.
 */
function ch1_4(str) {
	let lookup = [];
	let alphabet = 26;
	let count = 0;
	let limit = 'az'
	let a = limit.charCodeAt(0);
	let b = limit.charCodeAt(1);
	str = str.toLowerCase();
	//console.log(str);
	for(i = 0; i < str.length; i++) {
		let n = str.charCodeAt(i);
		if(n >= a && n <= b) {
			let index = n % alphabet;
			if(lookup[index] === undefined) {
				lookup[index] = 1;
				//console.log("Adding: ", str.charAt(i));
				count++;
			} else {
				lookup[index] = undefined;
				//console.log("Removing: ", str.charAt(i));
				count--;
			}
		}
	}
	//console.log(count);
	if(count > 1) {
		return false;
	} else {
		return true;
	}
}


/**
 * One Away - Case Sensitive
 *
 * @param      {string}   str1    The first string to check for differences.
 * @param      {string}   str2    The second string to check for differences.
 * @return     {boolean}  If the strings have one difference among them.
 */
function ch1_5(str1,str2) {
	let differences = 0;
	let len = str1.length > str2.length ? str1.length : str2.length;
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	for(i = 0; i < len; i++) {
		let c1 = str1.charCodeAt(i);
		let c2 = str2.charCodeAt(i);
		if(c1 != c2) {
			differences++;
		}
	}
	if(differences > 1) {
		return false;
	} else {
		return true;
	}
}

/**
 * String Compression - Holds Order
 *
 * @param      {string}  str     The string to be compressed
 * @return     {string} The compressed string.
 */
function ch1_6a(str) {
	
	let arr = [];
	let i = 0, j = 0, count;
	let curr, prev;
	while(i < str.length+1) {
		prev = curr;
		curr = str.charAt(i);
		if(curr != prev) {
			arr[j] = prev;
			arr[j+1] = count;
			j = j + 2;
			count = 1;
		} else {
			count++;
		}
		i++;
	}
	return arr.join("");
	
}

/**
 * String Compression - Ignores Order
 *
 * @param      {string}  str     The string to be compressed
 * @return     {string} The compressed string.
 */
function ch1_6b(str) {
	str = str.toLowerCase();
	let arr = [];
	let lookup = [];
	let keys = [];
	let alphabet = 26;
	for(i = 0; i < str.length; i++) {
		let n = str.charCodeAt(i);
		let index = n % alphabet;
		if(lookup[index] === undefined) {
			lookup[index] = 1;
			keys.push(n);
		} else {
			lookup[index]++;
		}
	}
	for(j = 0; j < keys.length; j++) {
		let charcode = keys[j];
		let index = charcode % alphabet;
		let count = lookup[index];
		let char = String.fromCharCode(charcode);
		arr.push(char);
		arr.push(count);
	}
	return arr.join("");
}

//
// Rotate Matrix
//
// @param      {array}  m       The input matrix
// @return     {array}  The output matrix, rotated 90 degrees.
//
function ch1_7(m) {
	let value = 0;
	for(i = 0; i < m.length; i++) {
		for(j = i; j < m[i].length; j++) {
			value = m[i][j];
			m[i][j] = m[j][i];
			m[j][i] = value;
		}
	}
	return m;
}

//
// Zero Matrix
//
// @param      {array}  m       The input matrix
// @return     {array}  The output matrix, with zeros in the same column / row as existing zero.
//
function ch1_8(m) {
	let x = -1, y = -1;
	for(i = 0; i < m.length; i++) {
		for(j = 0; j < m[i].length; j++) {
			if(m[i][j] == 0) {
				x = i;
				y = j;
			}
		}
	}
	for(k = 0; k < m.length; k++) {
		m[x][k] = 0;
		m[k][y] = 0;
	}
	return m;
}

/**
 * String rotation
 *
 * @param      {string}  str1       The string being passed.
 * @param      {<type>}  str2		The second string being passed.
 * @return     {boolean} If they are a substring or rotation.
 */
function ch1_9(str1, str2) {
	let whole_string = str1 + str1;
	if(whole_string.includes(str2)) {
		return true;
	}
	else {
		return false;
	}
}
// console.log(ch1_1b('haHa'));
// console.log(ch1_1b('nopeaf'));
// console.log(ch1_2("hello","ohell"));
// console.log(ch1_2("hello","ohello"));
// console.log(ch1_2("hello","ohelo"));
// console.log(ch1_3("Mr John Smith    ", 13));
// console.log(ch1_3("Mr John Doe    ", 11));
// console.log(ch1_4("Tact Coa"));
// console.log(ch1_4("Tattoao"));
// console.log(ch1_4("Tact Ca"));
// console.log(ch1_4("Tat Coa"));
// console.log(ch1_5("hello","hell"));
// console.log(ch1_5("hello","hel"));
// console.log(ch1_5("hello","helloo"));
// console.log(ch1_5("hello","hellooo"));
// console.log(ch1_5("hello","hell1"));
// console.log(ch1_5("hello","hell11"));
// console.log(ch1_6a("aabccccaaa"));

// let m = new Matrix()
// m = m.createIncremental(6);
// console.log(m)
// n = ch1_7(m);
// console.log(n);
// let m = new Matrix()
// m = m.createWithZero(6,2,4);
// console.log(m)
// n = ch1_8(m);
// console.log(n);
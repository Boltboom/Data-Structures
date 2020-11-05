let LinkedList = require("./linkedlist.js");
/**
 * This class describes an Array of Linked Lists mapped via Hash function, defined as a Dictionary.
 * In the event of a conflict, the values are appended. The arry size of this Data Structure cannot change.
 *
 * @class      Dictionary (name)
 */
class Dictionary {


	/**
	 * Constructs a new instance.
	 *
	 * @param      {number}  [size=1024]  The size of the hashmap, conflicts will depend on size.
	 */
	constructor(size = 1024) {
		this.arr = [];
		this.keys = [];
		this.size = size;
	}

	/**
	 * Hash function to generate index for Dictionary
	 *
	 * @param      {string}  key     The key used to find index in Dictionary.
	 * @return     {number}  The index of the Dictionary.
	 * @runtime O(k): where k is the length of the key.
	 */
	hash(key) {
		var hash = 0, i, chr;
		for(i = 0; i < key.length; i++) {
			chr = key.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash != 0;
		}
		return (hash % this.size);
	}



	/**
	 * Adds a value to the Dictionary based on key - in the event of a conflict, value is appended.
	 *
	 * @param      {string}  key     The key used for lookup.
	 * @param      {Object}  value   The value added to the Dictionary.
	 * @runtime	O(k): where k is the length of the key.
	 */
	add(key, value) {
		let index = this.hash(key);
		let list = this.arr[index];
		if(list === undefined) {
			list = new LinkedList();
		} 
		list.push(value);
		this.arr[index] = list;
		this.keys.push(key);
	}
	

	/**
	 * Removes full list from Dictionary based on key
	 *
	 * @param      {string}  key     The key used for lookup.
	 * @return     {Array}  The values being removed from the Dictionary.
	 * @runtime	O(Nk): where k is the length of the key, and N is the number of elements in the list.
	 */
	removeAll(key) {
		let index = this.hash(key);
		let values = this.arr[index];
		if(values === undefined) {
			return undefined;
		} else {
			return values.toArray();
			this.arr[index] = undefined;
		}
	}

	/**
	 * Removes the top value from list in Dictionary
	 *
	 * @param      {string}  key     The key used for lookup.
	 * @return     {Object}  The value being removed from the Dictionary.
	 * @runtime	O(k): where k is the length of the key.
	 */
	removeTop(key) {
		let index = this.hash(key);
		let values = this.arr[index];
		if(values === undefined) {
			return undefined;
		} else {
			return values.removeFrom(0);
			if(values.size == 0) {
				this.arr[index] = undefined;
			} 
		}
	}

	/**
	 * Gets the list of values based on key.
	 *
	 * @param      {string}  key     The key used for lookup.
	 * @return     {Array}  The list being removed.
	 * @runtime	O(Nk): where k is the length of the key, and N is the number of elements in the list.
	 */
	getAll(key) {
		let index = this.hash(key);
		let values = this.arr[index];
		if(values === undefined) {
			return undefined;
		} else {
			return values.toArray();
		}
	}

	/**
	 * Gets the top value based on key.
	 *
	 * @param      {string}  key     The key used for lookup.
	 * @return     {Object}  The top value being removed.
	 * @runtime	O(k): where k is the length of the key.
	 */
	getTop(key) {
		let index = this.hash(key);
		let values = this.arr[index];
		if(values === undefined) {
			return undefined;
		} else {
			return values.get(0);
		}	
	}

	/**
	 * Clears the Dictionary.
	 * 
	 * @runtime O(1)
	 */
	clear() {
		this.arr = [];
	}
}
module.exports = Dictionary;
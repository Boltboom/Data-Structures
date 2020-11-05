let Node = require("./node.js");
/**
 * This class describes a LinkedList.
 *
 * @class      LinkedList (name)
 * @author     Robert Schultz
 */
class LinkedList {
	
	/**
	 * Constructs a new instance.
	 * 
	 * @runtime	O(1): Constant
	 */
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	/**
	 * Adds the specified element to the end of the list
	 *
	 * @param      {Object}  element  The value being added to the list.
	 * @runtime	O(1): Constant
	 */
	append(element) {
		if(this.tail == null) {
			this.tail = new Node(element);
			this.head = this.tail;
		} else {
			let node = new Node(element);
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
		return this;
	}

	/**
	 * Adds the specified element to the end of the list
	 *
	 * @param      {Object}  element  The value being added to the list.
	 * @runtime	O(1): Constant
	 */
	appendNode(node) {
		if(this.tail == null) {
			this.tail = node;
			this.head = this.tail;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
		return this;
	}

	/**
	 * Adds the specified element to the beginning of the list
	 *
	 * @param      {Object}  element  The value being added to the list.
	 * @runtime	O(1): Constant
	 */
	push(element) {
		if(this.head == null) {
			this.head = new Node(element);
			this.tail = this.head;
		} else {
			let node = new Node(element);
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.size++;
		return this;
	}

	/**
	 * Adds the specified Node to the beginning of the list
	 *
	 * @param      {Object}  element  The value being added to the list.
	 * @runtime	O(1): Constant
	 */
	pushNode(node) {
		if(this.head == null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.size++;
		return this;
	}


	/**
	 * Adds the specified element to the end of the list.
	 *
	 * @param      {Object}  element  The value being added to the end of the list.
	 * @runtime O(N): where N is number of elements in LinkedList
	 */
	add(element) {
		let node = new Node(element);
		let current;

		if(this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	/**
	 * Adds the specified element to a specific index in the list.
	 *
	 * @param      {Object}  element  The value being added to the list.
	 * @param      {number}   index  The index in the list.
	 * @return     {boolean}  True if value inserted, False otherwise.
	 * @runtime O(N): where N is number of elements in LinkedList.
	 */
	insertAt(element,index) {
		if(index < 0 || index > this.size) {
			return false;
		} else {
			let node = new Node(element);
			let curr, prev;
			curr = this.head;

			//If index = 0, then replace head node.
			if(index == 0) {
				this.head.prev = node;
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				//Iterate until reaching the index
				while(it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// Set the inserted element before current node, and after previous
				curr.prev = node;
				node.next = curr;
				node.prev = prev;
				prev.next = node;
			}
			this.size++;
			return true;
		}
	}

	/**
	 * Removes an element from a specific index.
	 *
	 * @param      {number}  index   The index of the value to be removed.
	 * @return     {Object}  The value of the node removed from the list, if found.
	 * @runtime	O(N): where N is number of elements in LinkedList.
	 */
	removeFrom(index) {
		//Check if index is valid
		if(index < 0 || index >= this.size) {
			return null;
		} else {
			var curr, prev, it = 0;
			curr = this.head;
			//If removing the first element, simple cut
			if(index == 0) {
				this.head = curr.next;
				curr.prev = null;
			} else {
				//Iterate until reaching the index
				while(it < index) {
					it++
					prev = curr;
					curr = curr.next;
				}
				curr.next.prev = prev;
				prev.next = curr.next;
			}
			this.size--;
			return curr.element;

		}
	}

	/**
	 * Removes a specific element.
	 *
	 * @param      {Object}  element  The value in the list.
	 * @return     {Object}  The value removed from the list, if found.
	 * @runtime	O(N): where N is number of elements in LinkedList.
	 */
	removeElement(element) {
		let curr, prev = null;
		curr = this.head;
		while(curr) {
			if(curr.element == element) {
				//Found at first node, set head to current next, else cut out element
				if(prev == null) {
					this.head = curr.next;
				} else {
					curr.next.prev = prev;
					prev.next = curr.next;
				}
				this.size--;
				return curr.element;
			}
			prev = curr;
			curr = curr.next;
		}
		return null;
	}

	removeNode(node) {
		let next = node.next;
		let removed = next;
		if(removed) {
			removed.element = node.element;
			node.element = next.element;
			node.next = next.next;
			return removed;
		} else {
			this.head == null
			this.tail == null
			return null;
		}
	}


	/**
	 * Returns value at specified index
	 *
	 * @param       {number}  The index of the value.
	 * @runtime O(N): where N is number of elements in LinkedList.
	 */
	get(index) {
		let it = 0;
		let curr = this.head;
		while(curr) {
			if(it == index) {
				return curr;
			}
			curr = curr.next;
			it++;
		}
		return null;
	}

	/**
	 * Searches for the first match.
	 *
	 * @param      {Object}  element  The value in the list.
	 * @return     {number}  The index where the match was found.
	 * @runtime O(N): where N is number of elements in LinkedList.
	 */
	indexOf(element) {
		let curr, it = 0;
		curr = this.head;
		while(curr) {
			if(curr.element == element) {
				return it;
			}
			it++;
			curr = curr.next;
		}
		return -1;
	}

	/**
	 * Determines if empty.
	 *
	 * @return     {boolean}  True if empty, False otherwise.
	 * @runtime	O(1): Constant
	 */
	isEmpty() {
		return (this.size == 0);
	}

	/**
	 * Returns size of the list.
	 *
	 * @return     {number}  The size of the list.
	 */
	size() {
		return this.size;
	}


	/**
	 * Prints the values of the LinkedList
	 * 
	 * @runtime O(N): where N is number of elements in LinkedList.
	 */
	print() {
		let current = this.head;
		let string = "";
		while(current) {
			string += current.element + "->";
			current = current.next;
		}
		console.log(string);
	}

	/**
	 * Returns an array representation of the object.
	 *
	 * @return     {Array}  Array representation of the object.
	 * @runtime O(N): where N is number of elements in LinkedList.
	 */
	toArray() {
		let arr = [];
		let curr = this.head;
		while(curr) {
			arr.push(curr.element);
			curr = curr.next;
		}
		return arr;
	}
}
module.exports = LinkedList;
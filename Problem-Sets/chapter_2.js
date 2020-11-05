
let LinkedList = require("./linkedlist.js");
let Node = require("./node.js");
let Dictionary = require("./dictionary.js");
let StringBuilder = require("./stringbuilder.js");
let Matrix = require("./matrix.js");

/**
 * Remove dupes
 *
 * @param      {LinkedList}  list    The list
 * @return     {LinkedList}  The list with all 0s removed.
 */
function ch2_1(list) {
	let prev, curr = list.head;
	let arr = [];
	let size = 1024*64;
	let index = 0;
	while(curr) {
		index = curr.element % size;
		if(arr[index] == 1) {
			prev.next = curr.next;
		} else {
			prev = curr;
		}
		curr = curr.next;
		arr[index] = 1;
	}
	return list;
}


/**
 * Return to kth to last
 *
 * @param      {LinkedList}  list    The list
 * @param      {number}      k       The kth to last element
 * @return     {LinkedList}
 */
function ch2_2(list, k) {
	let size = list.size;
	let index = size - k;
	let curr = list.head;
	let it = 0;
	while(it != k) {
		curr = curr.next;
		it++;
	}
	list.head = curr;
	return list;
}


/**
 * Delete Middle Node
 *
 * @param      {LinkedList}  list    The list.
 * @param      {Node}  node    The node.
 * @return     {LinkedList}  The list with the node removed.
 */
function ch2_3(list, node) {
	let next = node.next;
	node.element = next.element;
	node.next = next.next;
	return list;
}



/**
 * Partition List about an element.
 *
 * @param      {LinkedList}  list     The list
 * @param      {Object}  element  The element
 */
function ch2_4(list, element) {
	var curr = list.head;
	var next = curr.next;
	while(curr) {
		next = list.removeNode(curr);
		if(curr.element < element) {
			list.pushNode(curr);
			console.log(curr.element,"pushed left.");
		} else {
			list.pushNode(curr);
			console.log(curr.element,"pushed right.");
			
		}
		curr = next;
	}
	return list;
}


/*
    Problem 2.5:
    Sums the numbers represented by two linked lists, with each digit as a node.
    @return LinkedList containing the sum.
*/
function sumLists(list1, list2) {
    var node1 = list1.head;
    var node2 = list2.head;
    var head = addLists(node1, node2, 0);
    var list = new LinkedList();
    list.head = head;
    return list;
}

function addLists(node1, node2, carry) {
    if(node1 == null && node2 == null && carry == 0) {
        return null;
    }
    

    var value = carry;
    value += node1 != null ? node1.element : 0;
    value += node2 != null ? node2.element : 0;

    var result = new Node();
    var digit = value % 10;
    carry = (value > 9) ? 1 : 0;
    result.element = digit;
    result.next = addLists(node1 == null ? null : node1.next, node2 == null ? null : node2.next, carry);
    return result;
}

function execute2_5() {
    console.log("Testing Problem 2.5");
    var list1 = new LinkedList();
    var list2 = new LinkedList();
    list1.push(6).push(1).push(7);
    list2.push(2).push(9).push(5);
    list1.print();
    list2.print();
    console.log("=");
    var list = sumLists(list1,list2);
    list.print();
}

/*
    Problem 2.6
    Checks if the linked list is a palindrome.
*/
function palindrome(list) {
    var dict = new Dictionary();
    var left = list.head;
    var right = list.tail;
    while(left.element == right.element) {
        if(left === list.tail) {
            if(right === list.head) {
                return true;
            }
        }
        left = left.next;
        right = right.prev;
    }
    return false;
}

function execute2_6() {
    console.log("Testing Problem 2.6");
    var list = new LinkedList();
    list.push("a").push("b").push("c").push("b").push("a").push("a");
    list.print();
    console.log("Is Palindrome?: ", palindrome(list));
}

/*
    Problem 2.7
    Checks if there is an intersection by reference between both lists.
*/
function isIntersection(list1, list2) {
    var curr = list1.head;
    while(curr.next) {
        curr = curr.next;
    }
    var other = list2.head;
    while(other) {
        if(other === curr) {
            return true;
        }
        other = other.next;
    }
    return false;
}

function getIntersection(list1, list2) {
    var diff = list1.size - list2.size;
    if(diff > 0) {
        while(diff > 0) {
            list1.remove(0);
            diff--;
        }
    } else {
        diff = Math.abs(diff);
        while(diff > 0) {
            list2.remove(0);
            diff--;
        }
    }
    var first = list1.head;
    var second = list2.head;
    while(first) {
        if(first === second) {
            return true;
        }
        first = first.next;
        second = second.next;
    }
    return false;
}

/*
    Problem 2.8
    Checks if there is a loop in the list.
*/
function isLoop(list) {
    var curr = list.head;
    while(curr.next) {
        if(curr === list.head) {
            return curr;
        }
        curr = curr.next;
    }
    return null;
}

function execute2_8() {
    var list = new LinkedList();
    for(i = 0; i < 20; i++) {
        list.push(i);
    }
    list.print();
    list.tail.next = list.head;
    var node = isLoop(list);
    console.log(node.element);
}

execute2_8();


//console.log(ch2_1(list).toArray());
//console.log(ch2_2(list, 5).toArray());
//console.log(ch2_3(list, list.get(5)).toArray());
//console.log(ch1_9("waterbottle","waterbottle"));
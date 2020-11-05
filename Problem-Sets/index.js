
let LinkedList = require("./linkedlist.js");
let Node = require("./node.js");
let Dictionary = require("./dictionary.js");
let StringBuilder = require("./stringbuilder.js");
let Matrix = require("./matrix.js");
let Stack = require("./stack.js");

/*
    Problem 3.4
    MyQueue Class
*/

class MyQueue {
    constructor() {
        
    }
}

let stack = new Stack();
stack.push(5).push(7).push(4).push(8).push(-1).push(12);
console.log(stack.getMin());
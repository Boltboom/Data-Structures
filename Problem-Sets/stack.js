let Node = require("./node.js");
class Stack {
    constructor() {
        this.top;
        this.size = 0;
        this.min;
    }

    pop() {
        var top = this.top;
        if(top === this.min) {
            this.min = min.min;
        }
        this.top = this.top.next;
        return top.element;
    }

    push(element) {
        let node = new Node(element);
        if(this.min == null || element < this.min.element) {
            node.min = this.min;
            this.min = node;
        }
        node.next = this.top;
        this.top = node;
        return this;
    }

    peek() {
        if(top == null) return null;
        return top.element;
    }   

    getMin() {
        return this.min.element;
    }
}

module.exports = Stack;
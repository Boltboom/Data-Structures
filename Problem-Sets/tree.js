let Node = require("./node.js");
class Tree {
    constructor() {
        this.root = null;
    }

    add(val) {
        var newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let node = this.root;
            while(node) {
                if(node === val) {
                    return undefined;
                }
                if(val < node.val) {
                    if(node.left === null) {
                        node.left = newNode;
                        return this;
                    }
                    node = node.left;
                } else {
                    if(node.right === null) {
                        node.right = newNode;
                        return this;
                    }
                    node = node.right;
                }
            }
            return undefined;
        }
    }

    inOrderTraversal(node) {
        if(node != null) {
            this.inOrderTraversal(node.left);
            this.visit(node);
            this.inOrderTraversal(node.right);
        }
    }

    visit(node) {
        console.log(node.val);
    }
}

module.exports = Tree;

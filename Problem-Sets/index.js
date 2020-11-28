createBST = () => {
    return {
        insert: function(n) {
            if(this.val === undefined) {
                this.val = n;
                return this;
            } else {
                var node = this;
                while(node) {
                    if(n == node.val) return undefined;
                    if(n < node.val) {
                        if(node.left === undefined) {
                            node.left = {
                                val: n
                            };
                            return this;
                        }
                        node = node.left;
                    } else {
                        if(node.right === undefined) {
                            node.right = {
                                val: n
                            };
                            return this;
                        }
                        node = node.right;
                    }
                }
            }        
        },
        find: function(n) {
            if(this.val === undefined) {
                return undefined;
            } else {
                let node = this;
                while(node) {
                    if(n == node.val) return node;
                    if(n < node.val) {
                        if(node.left === undefined) {
                            return undefined;
                        }
                        node = node.left;
                    } else {
                        if(node.right === undefined) {
                            return undefined;
                        }
                        node = node.right;
                    }
                }
            }
        },
        minValue: function(node) {
            let minv = node.val;
            while(node.left != undefined) {
                minv = node.left.val;
                node = node.left;
            }
            return minv;
        },
        remove: function(root, n) {
            if(root == null) {
                return root;
            }

            //Navigate the tree
            if(n < root.val) {
                root.left = this.remove(root.left, n);
            } else if(n > root.val) {
                root.right = this.remove(root.right, n)
            }

            else {

                //If the left is null, pick the right and send back.
                if(root.left == null) {
                    return root.right;
                } else if(root.right == null) {
                    return root.left;
                }

                root.val = this.minValue(root.right);
                root.right = this.remove(root.right, root.val);
            }
            return root;
        }
    }
}

createMinHeap = () => {
    return {
        createFromArray(arr) {
            let n = arr.length;
            for(let i = n - 1; i >= 0; i--)
            {
                this.heapify(arr, n, i);
            }
            return arr;
        },

        heapify(arr, n, i) {
            let smallest = i;
            let left = (2*i) + 1;
            let right = (2*i) + 2;
            if(arr[left] < arr[smallest] && left < n) {
                smallest = left;
            }
            if(arr[right] < arr[smallest] && right < n) {
                smallest = right;
            }
            if(smallest != i) {
                //Callswap!
                console.log("Swap!", arr[i], arr[smallest]);
                let temp = arr[i];
                arr[i] = arr[smallest];
                arr[smallest] = temp;
                this.heapify(arr,smallest);
            }
        }
    }
}

function inOrderTraversal(root) {
    if(root != undefined) {
        inOrderTraversal(root.left);
        console.log(root.val);
        inOrderTraversal(root.right);
    }
}

function preOrderTraversal(root) {
    if(root!=undefined) {
        console.log(root.val);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}

function postOrderTraversal(root) {
    if(root!=undefined) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.val);
    }
}

// let newTree = createBST();
// newTree.insert(5).insert(10).insert(3).insert(4).insert(1).insert(7).insert(6).insert(8);
// console.log(newTree);
// newTree.remove(newTree, 7);
// postOrderTraversal(newTree);

let heap = createMinHeap();
let arr = [1,5,6,8,9,7,3];
arr = heap.createFromArray(arr);
console.log(arr, "arg");
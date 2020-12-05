/*
    Directional Graph
*/
var order = [];
var createGraphNode = (element) => {
    return {
        value: element,
        list: [],
        visited: false,

        root(element) {
            this.value = element;
        },

        add(source, target) {
            if(this.link(source,target)) {
                return;
            } else {
                if(source == this.value) {
                    this.list.push(createGraphNode(target));
                } else {
                    let pnode = this.BFS(this, source);
                    if(pnode) {
                        let cnode = createGraphNode(target);
                        pnode.list.push(cnode);
                        return cnode;
                    } else {
                        return undefined;
                    }
                }
            }
        },

        link(source, target) {
            let pnode = this.DFS(this, source);
            let cnode = this.DFS(this, target);
            if(pnode && cnode) {
                if(!pnode.list.includes(cnode)) {
                    pnode.list.push(cnode);
                }
                return true;
            } else {
                return false;
            }
        },

        DFS(root, target) {
            let node = undefined;
            if(root.visited) {
                return;
            } else {
                root.visited = true;
                if(target == root.value) {
                    node = root;
                } else {
                    root.list.forEach(cnode => {
                        if(!node) {
                            node = this.DFS(cnode, target);
                        }
                    });
                }
            }
            root.visited = false;
            return node;
        },

        BFS(root, target) {
            let node;
            let v = [];
            let q = [];
            v.push(root);
            root.list.forEach(cnode => {
                q.push(cnode);
            });
            while(q.length > 0) {
                node = q.shift();
                if(node.value == target) return node;
                node.list.forEach(cnode => {
                    if(!v.includes(cnode)) {
                        v.push(cnode);
                        q.push(cnode);
                    }
                });
            }
        }
    }
}

let graph = createGraphNode("USA");
graph.add("USA","CANADA");
graph.add("CANADA","BRITAIN");
graph.add("BRITAIN","GERMANY");
graph.add("GERMANY","POLAND");
graph.add("POLAND","UKRAINE");
graph.add("CANADA","FRANCE");
graph.add("BRITAIN","FRANCE");
graph.add("GERMANY","POLAND");
graph.add("FRANCE","GERMANY");
graph.add("POLAND","UKRAINE");
graph.add("UKRAINE","USA");
console.log(graph);
console.log("\n------\n");
console.log(graph.DFS(graph, "UKRAINE"));
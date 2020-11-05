/**
 * This class describes a node.
 *
 * @class      Node (name)
 * @author     Robert Schultz
 * 
 */
class Node {

	/**
	 * Constructs a new instance.
	 *
	 * @param      {Object}  element  The value provided for this node.
	 * @runtime	O(1): Constant
	 */
	constructor(element) {
		this.element = element;
        this.next = null;
		this.prev = null;
		this.min = null;
	}
}
module.exports = Node;
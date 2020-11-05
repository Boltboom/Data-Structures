class StringBuilder {

	constructor(str = '') {
		this.arr = str.split();
	}

	append(str) {
		this.arr.push(str.split());
	}

	toString() {
		return this.arr.join('');
	}
}
module.exports = StringBuilder;
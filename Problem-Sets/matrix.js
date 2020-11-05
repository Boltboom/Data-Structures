class Matrix {
	
	constructor() {
		this.m = [];
	}

	createIncremental(n) {
		let k = 0, j = 0;
		for(k = 0; k < n; k++) {
			this.m.push([]);
			for(j = 0; j < n; j++) {
				this.m[k][j] = ((k+1) * (j+1)) + (j+1);
			}
		}
		return this.m;
	}

	createWithZero(n,x,y) {
		let k = 0, j = 0;
		for(k = 0; k < n; k++) {
			this.m.push([]);
			for(j = 0; j < n; j++) {
				if(k == x && j == y) {
					this.m[k][j] = 0;
				} else {
					this.m[k][j] = ((k+1) * (j+1)) + (j+1);
				}
			}
		}
		return this.m;
	}
}

module.exports = Matrix;
/** CircularArray: a class with methods for rotating circular arrays */

class CircularArray {
    constructor(vals = []) {
        this.vals = vals;
    }

    /** addItem(val): add an item to the array */

    addItem(val) {
        this.vals.push(val);
    }

    /** getByIndex(idx): get an item by index */

    getByIndex(idx) {
        if (idx >= 0) {
            if (idx < this.vals.length) return this.vals[idx];
            else return null;
        } else {
            if (-idx <= this.vals.length) return this.vals[this.vals.length + idx];
            else return null;
        }
    }

    /** rotate(n): rotate the array n times */

    rotate(n) {
        if (this.vals.length > 1) {
            n = n % this.vals.length;

            if (n > 0) {
                let firstPart = this.vals.splice(0, n);
                this.vals = this.vals.concat(firstPart);
            } else if (n < 0) {
                let lastPart = this.vals.splice(n, -n);
                this.vals = lastPart.concat(this.vals);
            }
        }
    }
}

module.exports = CircularArray;
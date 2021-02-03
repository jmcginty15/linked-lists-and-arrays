const CircularArray = require('./circular-array');

describe("getByIndex", function () {
    it("gets the value at the given index", function () {
        const array = new CircularArray([1, 2, 3, 4, 5]);

        expect(array.getByIndex(0)).toBe(1);
        expect(array.getByIndex(3)).toBe(4);
        expect(array.getByIndex(19)).toBe(null);
        expect(array.getByIndex(-2)).toBe(4);
        expect(array.getByIndex(-5)).toBe(1);
        expect(array.getByIndex(-19)).toBe(null);
    });
});

describe("addItem", function () {
    it("adds an item to the end of the array", function () {
        const array = new CircularArray();

        array.addItem(7);
        expect(array.vals).toEqual([7]);
        array.addItem(9);
        expect(array.vals).toEqual([7, 9]);
    });
});

describe("rotate", function () {
    it("does not change the array with a rotation value of zero", function () {
        const array = new CircularArray([1, 2, 3, 4, 5]);

        array.rotate(0);
        expect(array.vals).toEqual([1, 2, 3, 4, 5]);
    });

    it("rotates the array by a positive value", function () {
        const array = new CircularArray([1, 2, 3, 4, 5]);

        array.rotate(3);
        expect(array.vals).toEqual([4, 5, 1, 2, 3]);
        array.rotate(2);
        expect(array.vals).toEqual([1, 2, 3, 4, 5]);
        array.rotate(17);
        expect(array.vals).toEqual([3, 4, 5, 1, 2]);
    });

    it("rotates the array by a negative value", function () {
        const array = new CircularArray([1, 2, 3, 4, 5]);

        array.rotate(-2);
        expect(array.vals).toEqual([4, 5, 1, 2, 3]);
        array.rotate(-3);
        expect(array.vals).toEqual([1, 2, 3, 4, 5]);
        array.rotate(-19);
        expect(array.vals).toEqual([2, 3, 4, 5, 1]);
    });

    it("does not change arrays with lengths of 0 or 1", function () {
        const array = new CircularArray();

        array.rotate(48);
        expect(array.vals).toEqual([]);
        array.addItem(1);
        array.rotate(94);
        expect(array.vals).toEqual([1]);
    });
});

describe("rotate and addItem", function () {
    it("always adds an item to the end of the array in its current rotation state", function () {
        const array = new CircularArray([1, 2, 3, 4, 5]);

        array.rotate(3);
        expect(array.vals).toEqual([4, 5, 1, 2, 3]);
        array.addItem(6);
        expect(array.vals).toEqual([4, 5, 1, 2, 3, 6]);
        array.rotate(-2);
        expect(array.vals).toEqual([3, 6, 4, 5, 1, 2]);
        array.addItem(7);
        expect(array.vals).toEqual([3, 6, 4, 5, 1, 2, 7]);
    });
});
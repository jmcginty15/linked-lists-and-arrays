const DoublyLinkedList = require("./doubly-linked-list");

describe("push", function () {
    it("appends node and increments length", function () {
        let lst = new DoublyLinkedList();

        lst.push(5);
        expect(lst.length).toBe(1);
        expect(lst.head.val).toBe(5);
        expect(lst.tail.val).toBe(5);

        lst.push(10);
        expect(lst.length).toBe(2);
        expect(lst.head.val).toBe(5);
        expect(lst.head.next.val).toBe(10);
        expect(lst.tail.val).toBe(10);
        expect(lst.tail.prev.val).toBe(5);

        lst.push(15);
        expect(lst.length).toBe(3);
        expect(lst.head.val).toBe(5);
        expect(lst.head.next.next.val).toBe(15);
        expect(lst.tail.val).toBe(15);
        expect(lst.tail.prev.prev.val).toBe(5);
    });
});

describe("unshift", function () {
    it("adds node at start and increments length", function () {
        let lst = new DoublyLinkedList();

        lst.unshift(5);
        expect(lst.length).toBe(1);
        expect(lst.head.val).toBe(5);
        expect(lst.tail.val).toBe(5);

        lst.unshift(10);
        expect(lst.length).toBe(2);
        expect(lst.head.val).toBe(10);
        expect(lst.head.next.val).toBe(5);
        expect(lst.tail.val).toBe(5);
        expect(lst.tail.prev.val).toBe(10);

        lst.unshift(15);
        expect(lst.length).toBe(3);
        expect(lst.head.val).toBe(15);
        expect(lst.head.next.next.val).toBe(5);
        expect(lst.tail.val).toBe(5);
        expect(lst.tail.prev.prev.val).toBe(15);
    });
});

describe("pop", function () {
    it("removes node at end and decrements length", function () {
        let lst = new DoublyLinkedList([5, 10]);

        expect(lst.pop()).toBe(10);
        expect(lst.head.val).toBe(5);
        expect(lst.tail.val).toBe(5);
        expect(lst.length).toBe(1);

        expect(lst.pop()).toBe(5);
        expect(lst.tail).toBe(null);
        expect(lst.head).toBe(null);
        expect(lst.length).toBe(0);
    });
});

describe("shift", function () {
    it("removes node at start and decrements length", function () {
        let lst = new DoublyLinkedList([5, 10]);

        expect(lst.shift()).toBe(5);
        expect(lst.tail.val).toBe(10);
        expect(lst.length).toBe(1);

        expect(lst.shift()).toBe(10);
        expect(lst.tail).toBe(null);
        expect(lst.head).toBe(null);
        expect(lst.length).toBe(0);
    });
});

describe("getAt", function () {
    it("gets val at index", function () {
        let lst = new DoublyLinkedList([5, 10]);

        expect(lst.getAt(0)).toBe(5);
        expect(lst.getAt(1)).toBe(10);
    });
});

describe("setAt", function () {
    it("sets val at index", function () {
        let lst = new DoublyLinkedList([5, 10]);

        expect(lst.setAt(0, 1));
        expect(lst.setAt(1, 2));
        expect(lst.head.val).toBe(1);
        expect(lst.head.next.val).toBe(2);
    });
});

describe("insertAt", function () {
    it("inserts node and adjusts nearby nodes", function () {
        let lst = new DoublyLinkedList([5, 10, 15, 20]);

        lst.insertAt(2, 12);
        expect(lst.length).toBe(5);
        expect(lst.head.val).toBe(5);
        expect(lst.head.next.val).toBe(10);
        expect(lst.head.next.next.val).toBe(12);
        expect(lst.head.next.next.next.val).toBe(15);
        expect(lst.head.next.next.next.next.val).toBe(20);
        expect(lst.tail.val).toBe(20);
        expect(lst.tail.prev.val).toBe(15);
        expect(lst.tail.prev.prev.val).toBe(12);
        expect(lst.tail.prev.prev.prev.val).toBe(10);
        expect(lst.tail.prev.prev.prev.prev.val).toBe(5);
        expect(lst.length).toBe(5);

        lst.insertAt(5, 25);
        expect(lst.head.next.next.next.next.next.val).toBe(25);
        expect(lst.tail.prev.prev.prev.prev.prev.val).toBe(5);
        expect(lst.head.val).toBe(5);
        expect(lst.tail.val).toBe(25);
        expect(lst.length).toBe(6);
    });

    it("inserts into empty list", function () {
        let lst = new DoublyLinkedList();

        lst.insertAt(0, 5);
        expect(lst.length).toBe(1);
        expect(lst.head.val).toBe(5);
        expect(lst.tail.val).toBe(5);
    });
});

describe("removeAt", function () {
    it("removes from 1-item list", function () {
        let lst = new DoublyLinkedList(["a"]);

        lst.removeAt(0);
        expect(lst.length).toBe(0);
        expect(lst.head).toBe(null);
        expect(lst.tail).toBe(null);
    });

    it("removes from multi-item lists", function () {
        let lst = new DoublyLinkedList([1, 2, 3, 4, 5, 6, 7]);

        lst.removeAt(2);
        expect(lst.length).toBe(6);
        expect(lst.head.next.val).toBe(2);
        expect(lst.head.next.next.val).toBe(4);
        expect(lst.tail.prev.prev.prev.val).toBe(4);
        expect(lst.tail.prev.prev.prev.prev.val).toBe(2);

        lst.removeAt(4);
        expect(lst.length).toBe(5);
        expect(lst.head.next.next.next.val).toBe(5);
        expect(lst.head.next.next.next.next.val).toBe(7);
        expect(lst.tail.val).toBe(7);
        expect(lst.tail.prev.val).toBe(5);
    });
});

describe("average", function () {
    it("calculates the average of items in a list", function () {
        let lst = new DoublyLinkedList([2, 3, 1, 1, 7, 6, 9]);
        expect(lst.average()).toBeCloseTo(4.1429, 4);
    });

    it("returns 0 for empty lists", function () {
        let lst = new DoublyLinkedList();
        expect(lst.average()).toBe(0);
    });
});

describe("reverse", function () {
    it("does not modify a list with length 0 or 1", function () {
        let lst = new DoublyLinkedList();
        lst.reverse();
        expect(lst.head).toBe(null);
        expect(lst.tail).toBe(null);

        lst = new DoublyLinkedList([1]);
        lst.reverse();
        expect(lst.head.val).toBe(1);
        expect(lst.tail.val).toBe(1);
    });

    it("reverses a list in place", function () {
        let lst = new DoublyLinkedList([1, 2, 3, 4, 5, 6, 7]);
        lst.reverse();
        expect(lst.head.val).toBe(7);
        expect(lst.head.next.val).toBe(6);
        expect(lst.head.next.next.val).toBe(5);
        expect(lst.head.next.next.next.val).toBe(4);
        expect(lst.head.next.next.next.next.val).toBe(3);
        expect(lst.head.next.next.next.next.next.val).toBe(2);
        expect(lst.head.next.next.next.next.next.next.val).toBe(1);
        expect(lst.tail.val).toBe(1);
        expect(lst.tail.prev.val).toBe(2);
        expect(lst.tail.prev.prev.val).toBe(3);
        expect(lst.tail.prev.prev.prev.val).toBe(4);
        expect(lst.tail.prev.prev.prev.prev.val).toBe(5);
        expect(lst.tail.prev.prev.prev.prev.prev.val).toBe(6);
        expect(lst.tail.prev.prev.prev.prev.prev.prev.val).toBe(7);
    });
});

describe("pivot", function () {
    it("pivots a list around the input value", function () {
        let lst = new DoublyLinkedList([7, 6, 2, 3, 9, 1, 1]);
        lst.pivot(5);

        expect(lst.head.val).toBe(2);
        expect(lst.head.next.val).toBe(3);
        expect(lst.head.next.next.val).toBe(1);
        expect(lst.head.next.next.next.val).toBe(1);
        expect(lst.head.next.next.next.next.val).toBe(7);
        expect(lst.head.next.next.next.next.next.val).toBe(6);
        expect(lst.head.next.next.next.next.next.next.val).toBe(9);

        expect(lst.tail.val).toBe(9);
        expect(lst.tail.prev.val).toBe(6);
        expect(lst.tail.prev.prev.val).toBe(7);
        expect(lst.tail.prev.prev.prev.val).toBe(1);
        expect(lst.tail.prev.prev.prev.prev.val).toBe(1);
        expect(lst.tail.prev.prev.prev.prev.prev.val).toBe(3);
        expect(lst.tail.prev.prev.prev.prev.prev.prev.val).toBe(2);
    });
});
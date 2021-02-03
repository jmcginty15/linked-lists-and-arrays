const LinkedList = require('./linked-list');
const DoublyLinkedList = require('./doubly-linked-list');
const { sortLinkedLists, sortDoublyLinkedLists } = require('./sort-linked-lists');

describe("sortLinkedLists", function () {
    it("combines two sorted linked lists into one sorted linked list", function () {
        let lst1 = new LinkedList([3, 4, 8, 12, 59]);
        let lst2 = new LinkedList([2, 5, 8, 23, 45, 79]);
        let outputLst = sortLinkedLists(lst1, lst2);

        expect(outputLst.head.val).toBe(2);
        expect(outputLst.head.next.val).toBe(3);
        expect(outputLst.head.next.next.val).toBe(4);
        expect(outputLst.head.next.next.next.val).toBe(5);
        expect(outputLst.head.next.next.next.next.val).toBe(8);
        expect(outputLst.head.next.next.next.next.next.val).toBe(8);
        expect(outputLst.head.next.next.next.next.next.next.val).toBe(12);
        expect(outputLst.head.next.next.next.next.next.next.next.val).toBe(23);
        expect(outputLst.head.next.next.next.next.next.next.next.next.val).toBe(45);
        expect(outputLst.head.next.next.next.next.next.next.next.next.next.val).toBe(59);
        expect(outputLst.head.next.next.next.next.next.next.next.next.next.next.val).toBe(79);
    });
});

describe("sortDoublyLinkedLists", function () {
    it("combines two sorted doubly linked lists into one sorted doubly linked list", function () {
        let lst1 = new DoublyLinkedList([3, 4, 8, 12, 59]);
        let lst2 = new DoublyLinkedList([2, 5, 8, 23, 45, 79]);
        let outputLst = sortDoublyLinkedLists(lst1, lst2);

        expect(outputLst.head.val).toBe(2);
        expect(outputLst.head.next.val).toBe(3);
        expect(outputLst.head.next.next.val).toBe(4);
        expect(outputLst.head.next.next.next.val).toBe(5);
        expect(outputLst.head.next.next.next.next.val).toBe(8);
        expect(outputLst.head.next.next.next.next.next.val).toBe(8);
        expect(outputLst.head.next.next.next.next.next.next.val).toBe(12);
        expect(outputLst.head.next.next.next.next.next.next.next.val).toBe(23);
        expect(outputLst.head.next.next.next.next.next.next.next.next.val).toBe(45);
        expect(outputLst.head.next.next.next.next.next.next.next.next.next.val).toBe(59);
        expect(outputLst.head.next.next.next.next.next.next.next.next.next.next.val).toBe(79);

        expect(outputLst.tail.val).toBe(79);
        expect(outputLst.tail.prev.val).toBe(59);
        expect(outputLst.tail.prev.prev.val).toBe(45);
        expect(outputLst.tail.prev.prev.prev.val).toBe(23);
        expect(outputLst.tail.prev.prev.prev.prev.val).toBe(12);
        expect(outputLst.tail.prev.prev.prev.prev.prev.val).toBe(8);
        expect(outputLst.tail.prev.prev.prev.prev.prev.prev.val).toBe(8);
        expect(outputLst.tail.prev.prev.prev.prev.prev.prev.prev.val).toBe(5);
        expect(outputLst.tail.prev.prev.prev.prev.prev.prev.prev.prev.val).toBe(4);
        expect(outputLst.tail.prev.prev.prev.prev.prev.prev.prev.prev.prev.val).toBe(3);
        expect(outputLst.tail.prev.prev.prev.prev.prev.prev.prev.prev.prev.prev.val).toBe(2);
    });
});
const LinkedList = require('./linked-list');
const DoublyLinkedList = require('./doubly-linked-list');

const sortLinkedLists = (a, b) => {
    const outputList = new LinkedList();
    let currentNode1 = a.head;
    let currentNode2 = b.head;

    while (currentNode1 || currentNode2) {
        if (!currentNode1) {
            outputList.push(currentNode2.val);
            currentNode2 = currentNode2.next;
        } else if (!currentNode2) {
            outputList.push(currentNode1.val);
            currentNode1 = currentNode1.next;
        } else {
            if (currentNode1.val < currentNode2.val) {
                outputList.push(currentNode1.val);
                currentNode1 = currentNode1.next;
            }
            else {
                outputList.push(currentNode2.val);
                currentNode2 = currentNode2.next;
            }
        }
    }

    return outputList;
}

const sortDoublyLinkedLists = (a, b) => {
    const outputList = new DoublyLinkedList();
    let currentNode1 = a.head;
    let currentNode2 = b.head;

    while (currentNode1 || currentNode2) {
        if (!currentNode1) {
            outputList.push(currentNode2.val);
            currentNode2 = currentNode2.next;
        } else if (!currentNode2) {
            outputList.push(currentNode1.val);
            currentNode1 = currentNode1.next;
        } else {
            if (currentNode1.val < currentNode2.val) {
                outputList.push(currentNode1.val);
                currentNode1 = currentNode1.next;
            }
            else {
                outputList.push(currentNode2.val);
                currentNode2 = currentNode2.next;
            }
        }
    }

    return outputList;
}

module.exports = { sortLinkedLists, sortDoublyLinkedLists };
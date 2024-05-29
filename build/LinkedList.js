"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        //This loop if for reaching the last element in the linked List
        while (tail.next) {
            tail = tail.next;
        }
        //Now we add the new Node as last Node of the linked List
        tail.next = newNode;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let count = 1;
        let node = this.head;
        while (node.next) {
            count++;
            node = node.next;
        }
        return count;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bound");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIdx, rigthIdx) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIdx).data > this.at(rigthIdx).data;
    }
    /**
     *
     * @param leftIdx
     * @param rigthIdx
     * We cheated a bit hier, cause we just swaped the values of nodes instead of swapping the wholw Node (It would be more complicated)
     */
    swap(leftIdx, rigthIdx) {
        if (!this.head) {
            throw new Error("Something went wrong!!");
        }
        const leftNode = this.at(leftIdx);
        const rigthNode = this.at(rigthIdx);
        const leftHand = leftNode.data;
        leftNode.data = rigthNode.data;
        rigthNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;

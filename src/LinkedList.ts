import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(value: number): void {
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

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let count: number = 1;
    let node = this.head;
    while (node.next) {
      count++;
      node = node.next;
    }
    return count;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bound");
    }
    let counter: number = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIdx: number, rigthIdx: number): boolean {
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
  swap(leftIdx: number, rigthIdx: number): void {
    if (!this.head) {
      throw new Error("Something went wrong!!");
    }

    const leftNode: Node = this.at(leftIdx);
    const rigthNode: Node = this.at(rigthIdx);

    const leftHand = leftNode.data;
    leftNode.data = rigthNode.data;
    rigthNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

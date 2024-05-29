import { SortableI, Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIdx: number, rigthIdx: number): boolean {
    return this.data[leftIdx] > this.data[rigthIdx];
  }

  swap(leftIdx: number, rigthIdx: number) {
    const leftHand: number = this.data[leftIdx];
    this.data[leftIdx] = this.data[rigthIdx];
    this.data[rigthIdx] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }
}

export interface SortableI {
  length: number;
  compare(leftIdx: number, rigthIdx: number): boolean;
  swap(leftIdx: number, rigthIdx: number): void;
}

export abstract class Sorter {
  /* constructor(public collection: SortableI) {} */
  abstract compare(leftIdx: number, rigthIdx: number): boolean;
  abstract swap(leftIdx: number, rigthIdx: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

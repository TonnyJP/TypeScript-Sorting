import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIdx: number, rigthIdx: number): boolean {
    return (
      this.data[leftIdx].toLocaleLowerCase() >
      this.data[rigthIdx].toLocaleLowerCase()
    );
  }
  swap(leftIdx: number, rigthIdx: number): void {
    const characters = this.data.split("");

    const leftHand = characters[leftIdx];
    characters[leftIdx] = characters[rigthIdx];
    characters[rigthIdx] = leftHand;

    this.data = characters.join("");
  }
}

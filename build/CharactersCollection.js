"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rigthIdx) {
        return (this.data[leftIdx].toLocaleLowerCase() >
            this.data[rigthIdx].toLocaleLowerCase());
    }
    swap(leftIdx, rigthIdx) {
        const characters = this.data.split("");
        const leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rigthIdx];
        characters[rigthIdx] = leftHand;
        this.data = characters.join("");
    }
}
exports.CharactersCollection = CharactersCollection;

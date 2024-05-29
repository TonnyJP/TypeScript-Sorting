"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIdx, rigthIdx) {
        return this.data[leftIdx] > this.data[rigthIdx];
    }
    swap(leftIdx, rigthIdx) {
        const leftHand = this.data[leftIdx];
        this.data[leftIdx] = this.data[rigthIdx];
        this.data[rigthIdx] = leftHand;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;

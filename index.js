"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function creatDate(created) {
    // pega o objeto e colocar dentro dele uma NOVA propriedade createdAT
    created.prototype.createdAt = new Date();
}
;
function format() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(4, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
let Book = class Book {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
};
__decorate([
    format()
], Book.prototype, "id", void 0);
Book = __decorate([
    creatDate
], Book);
let Pen = class Pen {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    ;
};
__decorate([
    format()
], Pen.prototype, "id", void 0);
Pen = __decorate([
    creatDate
], Pen);
const book = new Book("1", "Lord of the Rings", 99.99);
console.log(book);

"use strict";
exports.__esModule = true;
var Move = /** @class */ (function () {
    function Move(name, initial_accuracy, type) {
        this.name = name;
        this.initial_accuracy = initial_accuracy;
        this.type = type;
        this.dommage = 0;
    }
    return Move;
}());
exports.Move = Move;
var Attack = /** @class */ (function () {
    function Attack(name, initial_accuracy, type, dommage) {
        this.name = name;
        this.initial_accuracy = initial_accuracy;
        this.type = type;
        this.dommage = dommage;
    }
    return Attack;
}());
exports.Attack = Attack;

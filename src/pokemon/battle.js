"use strict";
exports.__esModule = true;
var Battle = /** @class */ (function () {
    function Battle(redPokemon, bluePokemon) {
        this.roundCounter = 0;
        this.redPokemon = redPokemon;
        this.bluePokemon = bluePokemon;
        this.isPaused = false;
    }
    Battle.prototype.priority = function (firstPokemon, secondPokemon) {
        return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
    };
    Battle.prototype.round = function () {
        this.roundCounter++;
        if (this.priority(this.redPokemon, this.bluePokemon) === this.redPokemon) {
            return this.attackTrade(this.redPokemon, this.bluePokemon);
        }
        else {
            return this.attackTrade(this.bluePokemon, this.redPokemon);
        }
    };
    Battle.prototype.fight = function () {
        var _this = this;
        if (this.redPokemon.health_point > 0 && this.bluePokemon.health_point > 0) {
            this.round().then(function () {
                if (_this.isPaused) {
                    return;
                }
                _this.fight();
            });
        }
        else {
            this.winner = this.redPokemon.health_point > 0 ? this.redPokemon : this.bluePokemon;
            console.log(this.winner.name + ' est le gagnant !');
            return this.winner;
        }
    };
    Battle.prototype.pause = function () {
        this.isPaused = true;
    };
    Battle.prototype.resume = function () {
        this.isPaused = false;
        this.fight();
    };
    Battle.prototype.attackTrade = function (firstPokemon, secondPokemon) {
        return firstPokemon.throwAttack(secondPokemon).then(function () {
            if (secondPokemon.health_point > 0) {
                return secondPokemon.throwAttack(firstPokemon);
            }
        });
    };
    return Battle;
}());
exports.Battle = Battle;

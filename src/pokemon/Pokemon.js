"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, health_point, speed, attack, type) {
        this.name = name;
        this.health_point = health_point;
        this.speed = speed;
        this.attack = attack;
        this.type = type;
    }
    Pokemon.prototype.throwAttack = function (pokemon_targeted) {
        var _this = this;
        var prom = function (resolve, reject) {
            setTimeout(function () {
                pokemon_targeted.health_point -= _this.attack.dommage;
                console.log(_this.name + ' attaque ' + pokemon_targeted.name);
                console.log('Il reste ' + pokemon_targeted.health_point + ' à ' + pokemon_targeted.name);
                resolve();
            }, 1500);
            return null;
        };
        return new Promise(prom);
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var Type;
(function (Type) {
    Type[Type["PLANTE"] = 0] = "PLANTE";
    Type[Type["ELECTRIQUE"] = 1] = "ELECTRIQUE";
    Type[Type["EAU"] = 2] = "EAU";
})(Type = exports.Type || (exports.Type = {}));

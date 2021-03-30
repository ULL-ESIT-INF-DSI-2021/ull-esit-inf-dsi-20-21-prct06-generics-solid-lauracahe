"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = exports.Marvel = exports.Pokemon = exports.Fighter = void 0;
class Fighter {
    constructor(name, weight, height, BasicStatistics, universe, catchphrase) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.BasicStatistics = BasicStatistics;
        this.universe = universe;
        this.catchphrase = catchphrase;
    }
}
exports.Fighter = Fighter;
class Pokemon extends Fighter {
    constructor(name, weight, height, BasicStatistics, universe, catchphrase) {
        super(name, weight, height, BasicStatistics, universe, catchphrase);
        this.universe = universe;
        this.catchphrase = catchphrase;
    }
}
exports.Pokemon = Pokemon;
class Marvel extends Fighter {
    constructor(name, weight, height, BasicStatistics, universe, catchphrase) {
        super(name, weight, height, BasicStatistics, universe, catchphrase);
        this.universe = universe;
        this.catchphrase = catchphrase;
    }
}
exports.Marvel = Marvel;
class Combat {
    constructor(fighter1, fighter2) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
    }
    damage(fighter1, fighter2) {
        let effect = 0;
        if (fighter1.universe === 'marvel') {
            effect = 2;
        }
        else if (fighter1.universe === fighter2.universe) {
            effect = 1;
        }
        else {
            effect = 0.5;
        }
        console.log('Daño causado: ' + (50 * (fighter1.BasicStatistics.attack / fighter2.BasicStatistics.defense) * effect).toFixed(2));
        return 50 * (fighter1.BasicStatistics.attack / fighter2.BasicStatistics.defense) * effect;
    }
    damageUtoT(fighter1, fighter2) {
        let effect = 0;
        if (fighter1.universe === fighter2.universe) {
            effect = 2;
        }
        else if (fighter1.universe === 'marvel') {
            effect = 1;
        }
        else {
            effect = 0.5;
        }
        console.log('Daño causado: ' + (50 * (fighter1.BasicStatistics.attack / fighter2.BasicStatistics.defense) * effect).toFixed(2));
        return 50 * (fighter1.BasicStatistics.attack / fighter2.BasicStatistics.defense) * effect;
    }
    start() {
        let damage1 = 0;
        let damage2 = 0;
        while (damage1 <= this.fighter1.BasicStatistics.hp && damage2 <= this.fighter2.BasicStatistics.hp) {
            console.log('Ataque ' + this.fighter1.name + ': ');
            damage2 += this.damage(this.fighter1, this.fighter2);
            console.log('El daño máximo de ' + this.fighter1.name + ': ' + (this.fighter1.BasicStatistics.hp - damage1).toFixed(2));
            console.log('El daño máximo de ' + this.fighter2.name + ': ' + (this.fighter2.BasicStatistics.hp - damage2).toFixed(2));
            console.log(this.fighter1.catchphrase + '\n');
            if (damage2 >= this.fighter2.BasicStatistics.hp) {
                break;
            }
            console.log('Ataque ' + this.fighter2.name + ': ');
            damage1 += this.damageUtoT(this.fighter2, this.fighter1);
            console.log('El daño máximo de ' + this.fighter1.name + ': ' + (this.fighter1.BasicStatistics.hp - damage1).toFixed(2));
            console.log('El daño máximo de ' + this.fighter2.name + ': ' + (this.fighter2.BasicStatistics.hp - damage2).toFixed(2));
            console.log(this.fighter2.catchphrase + '\n');
        }
    }
}
exports.Combat = Combat;
const Charizard = new Pokemon('Charizard', 90.5, 1.7, { attack: 84, defense: 78, speed: 100, hp: 78 }, 'pokemon', 'The fire dragon');
const Aero = new Marvel('Aero', 78, 1.7, { attack: 52, defense: 90, speed: 60, hp: 50 }, 'marvel', 'As a brilliant Chinese architect');
const finalCombat = new Combat(Charizard, Aero);
finalCombat.start();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = exports.Temperature = exports.Time = exports.Length = exports.Mass = exports.Speed = void 0;
const measurementsSpeed = [['mps', 'mph', 'kph'], [0.28, 0.62, 1]];
/**
 * @brief Speed class that convert differents unit systems.
 */
class Speed {
    /**
     *
     * @param initial initial amount
     * @param initialUnit initial unit
     */
    constructor(initial, initialUnit) {
        this.initial = initial;
        this.initialUnit = initialUnit;
    }
    /**
     *
     * @param finalUnit final unit
     */
    unitChange(finalUnit) {
        return this.initial * measurementsSpeed[1][measurementsSpeed[0].indexOf(finalUnit)] / measurementsSpeed[1][measurementsSpeed[0].indexOf(this.initialUnit)];
    }
}
exports.Speed = Speed;
const measurementsMass = [['st', 'g', 'kg'], [0.16, 1000, 1]];
/**
 * @brief Mass class that convert differents unit systems.
 */
class Mass {
    constructor(initial, initialUnit) {
        this.initial = initial;
        this.initialUnit = initialUnit;
    }
    unitChange(finalUnit) {
        return this.initial * measurementsMass[1][measurementsMass[0].indexOf(finalUnit)] / measurementsMass[1][measurementsMass[0].indexOf(this.initialUnit)];
    }
}
exports.Mass = Mass;
const measurementsLenght = [['km', 'cm', 'm'], [0.001, 100, 1]];
/**
 * @brief Lenght class that convert differents unit systems.
 */
class Length {
    constructor(initial, initialUnit) {
        this.initial = initial;
        this.initialUnit = initialUnit;
    }
    unitChange(finalUnit) {
        return this.initial * measurementsLenght[1][measurementsLenght[0].indexOf(finalUnit)] / measurementsLenght[1][measurementsLenght[0].indexOf(this.initialUnit)];
    }
}
exports.Length = Length;
const measurementsTime = [['s', 'm', 'h'], [3600, 60, 1]];
/**
 * @brief Time class that convert differents unit systems.
 */
class Time {
    constructor(initial, initialUnit) {
        this.initial = initial;
        this.initialUnit = initialUnit;
    }
    unitChange(finalUnit) {
        return this.initial * measurementsTime[1][measurementsTime[0].indexOf(finalUnit)] / measurementsTime[1][measurementsTime[0].indexOf(this.initialUnit)];
    }
}
exports.Time = Time;
const measurementsTemperature = [['k', 'f', 'c'], [274.15, 33.8, 1]];
/**
 * @brief Temperature class that convert differents unit systems.
 */
class Temperature {
    constructor(initial, initialUnit) {
        this.initial = initial;
        this.initialUnit = initialUnit;
    }
    unitChange(finalUnit) {
        return this.initial * measurementsTemperature[1][measurementsTemperature[0].indexOf(finalUnit)] / measurementsTemperature[1][measurementsTemperature[0].indexOf(this.initialUnit)];
    }
}
exports.Temperature = Temperature;
const measurementsVolume = [['m3', 'ml', 'l'], [0.001, 1000, 1]];
/**
 * @brief Volume class that convert differents unit systems.
 */
class Volume {
    constructor(initial, initialUnit) {
        this.initial = initial;
        this.initialUnit = initialUnit;
    }
    unitChange(finalUnit) {
        return Number(this.initial * measurementsVolume[1][measurementsVolume[0].indexOf(finalUnit)] / measurementsVolume[1][measurementsVolume[0].indexOf(this.initialUnit)]);
    }
}
exports.Volume = Volume;
// const measurementsStrength: [string[], number[]] = [['kp'], [9.80665]];
// /**
//  * @brief Strength class that convert differents unit systems. 
//  */
// export class Strength implements isConvertible<number> {
//   constructor(public initial: number, public initialUnit: string) {}
//   unitChange(finalUnit: string): number {
//     return this.initial * measurementsStrength[1][measurementsStrength[0].indexOf(finalUnit)] / measurementsStrength[1][measurementsStrength[0].indexOf(this.initialUnit)];
//   }
// }
let mass = new Mass(6.8, 'g');
console.log(mass.unitChange('kg'));
let volume = new Volume(6.8, 'm3');
console.log(volume.unitChange('l'));
let speed = new Speed(6.8, 'mps');
console.log(speed.unitChange('kph'));
let length = new Length(6.8, 'cm');
console.log(length.unitChange('km'));
let time = new Time(6.8, 'm');
console.log(time.unitChange('s'));
let temperature = new Temperature(6.8, 'k');
console.log(temperature.unitChange('c'));

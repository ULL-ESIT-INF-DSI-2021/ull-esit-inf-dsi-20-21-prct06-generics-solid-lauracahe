/**
 * @brief Interface that allows conversions between systems for each magnitude
 */
export interface isConvertible<T> {
  initial: T; //Cantidad de origen
  initialUnit: string; //Unidad inicial
  unitChange(finalUnit: string): T; 
}

const measurementsSpeed: [string[], number[]] = [['mps', 'mph', 'kph'], [0.28, 0.62, 1]];

/**
 * @brief Speed class that convert differents unit systems. 
 */
export class Speed implements isConvertible<number> {
  /**
   * 
   * @param initial initial amount
   * @param initialUnit initial unit
   */
  constructor(public readonly initial: number, public readonly initialUnit: string) {}

  /**
   * 
   * @param finalUnit final unit
   */
  unitChange(finalUnit: string): number {
    return this.initial * measurementsSpeed[1][measurementsSpeed[0].indexOf(finalUnit)] / measurementsSpeed[1][measurementsSpeed[0].indexOf(this.initialUnit)];
  }
}

const measurementsMass: [string[], number[]] = [['st', 'g', 'kg'], [0.16, 1000, 1]];

/**
 * @brief Mass class that convert differents unit systems. 
 */
export class Mass implements isConvertible<number> {
  constructor(public initial: number, public initialUnit: string) {}

  unitChange(finalUnit: string): number {
    return this.initial * measurementsMass[1][measurementsMass[0].indexOf(finalUnit)] / measurementsMass[1][measurementsMass[0].indexOf(this.initialUnit)];
  }
}

const measurementsLenght: [string[], number[]] = [['km', 'cm', 'm'], [0.001, 100, 1]];

/**
 * @brief Lenght class that convert differents unit systems. 
 */
export class Length implements isConvertible<number> {
  constructor(public initial: number, public initialUnit: string) {}

  unitChange(finalUnit: string): number {
    return this.initial * measurementsLenght[1][measurementsLenght[0].indexOf(finalUnit)] / measurementsLenght[1][measurementsLenght[0].indexOf(this.initialUnit)];
  }
}

const measurementsTime: [string[], number[]] = [['s', 'm', 'h'], [3600, 60, 1]];

/**
 * @brief Time class that convert differents unit systems. 
 */
export class Time implements isConvertible<number> {
  constructor(public initial: number, public initialUnit: string) {}

  unitChange(finalUnit: string): number {
    return this.initial * measurementsTime[1][measurementsTime[0].indexOf(finalUnit)] / measurementsTime[1][measurementsTime[0].indexOf(this.initialUnit)];
  }
}

const measurementsTemperature: [string[], number[]] = [['k', 'f', 'c'], [274.15, 33.8, 1]];

/**
 * @brief Temperature class that convert differents unit systems. 
 */
export class Temperature implements isConvertible<number> {
  constructor(public initial: number, public initialUnit: string) {}

  unitChange(finalUnit: string): number {
    return this.initial * measurementsTemperature[1][measurementsTemperature[0].indexOf(finalUnit)] / measurementsTemperature[1][measurementsTemperature[0].indexOf(this.initialUnit)];
  }
}

const measurementsVolume: [string[], number[]] = [['m3', 'ml', 'l'], [0.001, 1000, 1]];

/**
 * @brief Volume class that convert differents unit systems. 
 */
export class Volume implements isConvertible<number> {
  constructor(public initial: number, public initialUnit: string) {}

  unitChange(finalUnit: string): number {
    return Number(this.initial * measurementsVolume[1][measurementsVolume[0].indexOf(finalUnit)] / measurementsVolume[1][measurementsVolume[0].indexOf(this.initialUnit)]);
  }
}

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
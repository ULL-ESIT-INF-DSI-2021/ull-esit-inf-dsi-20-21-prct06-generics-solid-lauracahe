export declare type BasicStatistics = {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
};
export declare abstract class Fighter {
    readonly name: string;
    readonly weight: number;
    readonly height: number;
    readonly BasicStatistics: BasicStatistics;
    readonly universe: string;
    readonly catchphrase: string;
    constructor(name: string, weight: number, height: number, BasicStatistics: BasicStatistics, universe: string, catchphrase: string);
}
export declare class Pokemon extends Fighter {
    readonly universe: string;
    readonly catchphrase: string;
    constructor(name: string, weight: number, height: number, BasicStatistics: BasicStatistics, universe: string, catchphrase: string);
}
export declare class Marvel extends Fighter {
    readonly universe: string;
    readonly catchphrase: string;
    constructor(name: string, weight: number, height: number, BasicStatistics: BasicStatistics, universe: string, catchphrase: string);
}
export declare class Combat<T extends Fighter, U extends Fighter> {
    fighter1: T;
    fighter2: U;
    constructor(fighter1: T, fighter2: U);
    damage(fighter1: T, fighter2: U): number;
    damageUtoT(fighter1: U, fighter2: T): number;
    start(): void;
}

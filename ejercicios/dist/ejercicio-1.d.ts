/**
 * @brief Type of basic statistics that contains the respective propertives
 */
export declare type BasicStatistics = {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
};
/**
 * @brief class that create the fighter
 */
declare abstract class Fighter {
    readonly name: string;
    readonly weight: number;
    readonly height: number;
    readonly BasicStatistics: BasicStatistics;
    readonly universe: string;
    readonly catchphrase: string;
    /**
     *
     * @brief Constructor of the class fighter
     * @param name Name of the fighter
     * @param weight Weight of the fighter
     * @param height Height of the fighter
     * @param BasicStatistics Basic Statistics of the fighter
     * @param universe Universe of the fighter
     * @param catchphrase Catch phrase of the fighter
     */
    constructor(name: string, weight: number, height: number, BasicStatistics: BasicStatistics, universe: string, catchphrase: string);
}
/**
 * @brief Class of Pokemon that derivate of fighter
 */
export declare class Pokemon extends Fighter {
    readonly universe: string;
    readonly catchphrase: string;
    /**
     *
     * @brief Constructor of Pokemon class
     * @param name Name of Pokemon
     * @param weight Weight of Pokemon
     * @param height Height of pokemon
     * @param BasicStatistics Basic Statistics of pokemon
     * @param universe Universe of pokemon
     * @param catchphrase Catch phrase of pokemon
     */
    constructor(name: string, weight: number, height: number, BasicStatistics: BasicStatistics, universe: string, catchphrase: string);
}
/**
 * @brief Class of marvel that derivate of fighter
 */
export declare class Marvel extends Fighter {
    readonly universe: string;
    readonly catchphrase: string;
    /**
     *
     * @brief Constructor of Marvel class
     * @param name Name of Marvel character
     * @param weight Weight of Marvel character
     * @param height Height of Marvel character
     * @param BasicStatistics Basic Statistics of Marvel character
     * @param universe Universe of Marvel
     * @param catchphrase Catch phrase of Marvel character
     */
    constructor(name: string, weight: number, height: number, BasicStatistics: BasicStatistics, universe: string, catchphrase: string);
}
/**
 * @brief Class that create a combat between two fighters
 */
export declare class Combat<T extends Fighter, U extends Fighter> {
    fighter1: T;
    fighter2: U;
    /**
     *
     * @brief Constructor that create the combat
     * @param fighter1 Fighter one
     * @param fighter2 Fighter two
     */
    constructor(fighter1: T, fighter2: U);
    /**
     *
     * @brief Calculate the damage between fighter one and fighter two
     * @param fighter1 Fighter one
     * @param fighter2 Fighter two
     */
    damage(fighter1: T, fighter2: U): number;
    /**
     *
     * @brief Damage that generate the oponent to fighter one
     * @param fighter1 Fighter one
     * @param fighter2 Fighter two
     */
    damageUtoT(fighter1: U, fighter2: T): number;
    /***
     * @brief Print the result of the combat between two fighters
     */
    start(): void;
}
export {};

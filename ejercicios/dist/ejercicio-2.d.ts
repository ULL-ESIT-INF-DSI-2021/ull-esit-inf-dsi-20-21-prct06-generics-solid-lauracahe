/**
 * @brief Interface that allows conversions between systems for each magnitude
 */
export interface isConvertible<T> {
    initial: T;
    initialUnit: string;
    unitChange(finalUnit: string): T;
}
/**
 * @brief Speed class that convert differents unit systems.
 */
export declare class Speed implements isConvertible<number> {
    readonly initial: number;
    readonly initialUnit: string;
    /**
     *
     * @param initial initial amount
     * @param initialUnit initial unit
     */
    constructor(initial: number, initialUnit: string);
    /**
     *
     * @param finalUnit final unit
     */
    unitChange(finalUnit: string): number;
}
/**
 * @brief Mass class that convert differents unit systems.
 */
export declare class Mass implements isConvertible<number> {
    initial: number;
    initialUnit: string;
    constructor(initial: number, initialUnit: string);
    unitChange(finalUnit: string): number;
}
/**
 * @brief Lenght class that convert differents unit systems.
 */
export declare class Length implements isConvertible<number> {
    initial: number;
    initialUnit: string;
    constructor(initial: number, initialUnit: string);
    unitChange(finalUnit: string): number;
}
/**
 * @brief Time class that convert differents unit systems.
 */
export declare class Time implements isConvertible<number> {
    initial: number;
    initialUnit: string;
    constructor(initial: number, initialUnit: string);
    unitChange(finalUnit: string): number;
}
/**
 * @brief Temperature class that convert differents unit systems.
 */
export declare class Temperature implements isConvertible<number> {
    initial: number;
    initialUnit: string;
    constructor(initial: number, initialUnit: string);
    unitChange(finalUnit: string): number;
}
/**
 * @brief Volume class that convert differents unit systems.
 */
export declare class Volume implements isConvertible<number> {
    initial: number;
    initialUnit: string;
    constructor(initial: number, initialUnit: string);
    unitChange(finalUnit: string): number;
}

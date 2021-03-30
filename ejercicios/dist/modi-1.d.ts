declare type Deportes = 'baloncesto' | 'futbol' | 'balonmano';
interface Polideportivos {
    getSuperficie(): number;
    getDeportes(): string;
    print(): void;
}
export declare class Polideportivo implements Polideportivos {
    private readonly superficie;
    private deportes;
    /**
     *
     * @param superficie Superficie del recinto
     * @param deportes Deportes permitidos en el recinto
     */
    constructor(superficie: number, deportes: Deportes);
    /**
     * @return Devuelve la superficie del recinto.
     */
    getSuperficie(): number;
    /**
     * @return Devuelve el deporte del recinto.
     */
    getDeportes(): Deportes;
    /**
     * @brief Imprime por pantalla los datos del polideportivo.
     */
    print(): void;
}
export {};

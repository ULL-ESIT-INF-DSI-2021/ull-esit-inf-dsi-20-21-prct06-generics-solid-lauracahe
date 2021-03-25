declare type Deportes = 'baloncesto' | 'futbol' | 'balonmano';
interface Polideportivos {
    getSuperficie(): number;
    getDeportes(): string;
    print(): void;
}
interface Edificios {
    getSuperficie(): number;
    print(): void;
}
declare class Polideportivo implements Polideportivos {
    private readonly superficie;
    private deportes;
    constructor(superficie: number, deportes: Deportes);
    getSuperficie(): number;
    getDeportes(): Deportes;
    print(): void;
}
declare class Gym {
    private readonly aforo;
    private superficie;
    constructor(aforo: number, superficie: number);
    getSuperficie(): number;
    getAforo(): number;
    print(): void;
}
declare abstract class Edificio implements Edificios {
    private superficie;
    constructor(superficie: number);
    getSuperficie(): number;
    abstract print(): void;
}
declare class Viviendas extends Edificio {
    private readonly viviendas;
    constructor(superficie: number, viviendas: number);
    getViviendas(): number;
    print(): void;
}
declare class Enseñanza extends Edificio {
    private readonly aulas;
    private readonly alumnos;
    constructor(superficie: number, aulas: number, alumnos: number);
    getAulas(): number;
    getAlumnos(): number;
    print(): void;
}
declare class Recinto<T extends Polideportivo, U extends Gym, Z extends Edificio> {
    private recinto;
    constructor(recinto: (T | U | Z)[]);
    print(): void;
}
declare const recintos: Recinto<Polideportivo, Gym, Edificio>;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polideportivo = void 0;
class Polideportivo {
    /**
     *
     * @param superficie Superficie del recinto
     * @param deportes Deportes permitidos en el recinto
     */
    constructor(superficie, deportes) {
        this.superficie = superficie;
        this.deportes = deportes;
    }
    /**
     * @return Devuelve la superficie del recinto.
     */
    getSuperficie() {
        return this.superficie;
    }
    /**
     * @return Devuelve el deporte del recinto.
     */
    getDeportes() {
        return this.deportes;
    }
    /**
     * @brief Imprime por pantalla los datos del polideportivo.
     */
    print() {
        console.log(`Polideportivo de ${this.getSuperficie} metros y se practica ${this.getDeportes()}.`);
    }
}
exports.Polideportivo = Polideportivo;
class Gym {
    /**
     *
     * @param aforo Aforo del gimnacio
     * @param superficie Superficie del gimnacio
     */
    constructor(aforo, superficie) {
        this.aforo = aforo;
        this.superficie = superficie;
    }
    /**
     * @return Devuelve la superficie del gimnacio
     */
    getSuperficie() {
        return this.superficie;
    }
    /**
     * @return Devuelve el aforo del gimnacio
     */
    getAforo() {
        return this.aforo;
    }
    /**
     * @brief Imprime los datos del gimnacio
     */
    print() {
        console.log(`Gymnacio con aforo de ${this.getAforo()} personas y ${this.getSuperficie()} metros.`);
    }
}
class Edificio {
    /**
     *
     * @param superficie Superficie del edificio
     */
    constructor(superficie) {
        this.superficie = superficie;
    }
    /**
     * @return Devuelve la superficie del edificio
     */
    getSuperficie() {
        return this.superficie;
    }
}
class Viviendas extends Edificio {
    /**
     *
     * @param superficie Superficie de la vivienda
     * @param viviendas Cantidad de viviendas
     */
    constructor(superficie, viviendas) {
        super(superficie);
        this.viviendas = viviendas;
    }
    /**
     * @return Número de viviendas
     */
    getViviendas() {
        return this.viviendas;
    }
    print() {
        console.log(`Vivienda con : ${this.getSuperficie()} de superficie y ${this.getViviendas()} viviendas.`);
    }
}
class Enseñanza extends Edificio {
    /**
     *
     * @param superficie Superficie de la enseñanza
     * @param aulas Aulas de la enseñanza
     * @param alumnos Alumnos por cada aula
     */
    constructor(superficie, aulas, alumnos) {
        super(superficie);
        this.aulas = aulas;
        this.alumnos = alumnos;
    }
    /**
     * @return Número de aulas
     */
    getAulas() {
        return this.aulas;
    }
    /**
     * @return Número de alumnos por aulas.
     */
    getAlumnos() {
        return this.alumnos;
    }
    print() {
        console.log(`Enseñanza con : ${this.getSuperficie()} de superficie, ${this.getAulas()} aulas y ${this.getAlumnos()} alumnos.`);
    }
}
class Recinto {
    constructor(recinto) {
        this.recinto = recinto;
    }
    print() {
        this.recinto.forEach((recinto) => {
            recinto.print();
        });
    }
}
const recintos = new Recinto([
    new Polideportivo(125, 'baloncesto'),
    new Gym(25, 50),
    new Viviendas(30, 4),
    new Enseñanza(100, 30, 25),
]);

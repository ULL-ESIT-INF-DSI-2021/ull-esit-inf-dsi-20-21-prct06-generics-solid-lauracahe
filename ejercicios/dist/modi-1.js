class Polideportivo {
    constructor(superficie, deportes) {
        this.superficie = superficie;
        this.deportes = deportes;
    }
    getSuperficie() {
        return this.superficie;
    }
    getDeportes() {
        return this.deportes;
    }
    setDeportes(deportes) {
        this.deportes = deportes;
    }
    print() {
        console.log(`Polideportivo de ${this.getSuperficie} metros y se practica ${this.getDeportes()}.`);
    }
}
class Gym {
    constructor(aforo, superficie) {
        this.aforo = aforo;
        this.superficie = superficie;
    }
    getSuperficie() {
        return this.superficie;
    }
    getAforo() {
        return this.aforo;
    }
    print() {
        console.log(`Gymnacio con aforo de ${this.getAforo()} personas y ${this.getSuperficie()} metros.`);
    }
}
class Edificio {
    constructor(superficie) {
        this.superficie = superficie;
    }
    getSuperficie() {
        return this.superficie;
    }
}
class Viviendas extends Edificio {
    constructor(superficie, viviendas) {
        super(superficie);
        this.viviendas = viviendas;
    }
    getViviendas() {
        return this.viviendas;
    }
    print() {
        console.log(`Vivienda con : ${this.getSuperficie()} de superficie y ${this.getViviendas()} viviendas.`);
    }
}
class Enseñanza extends Edificio {
    constructor(superficie, aulas, alumnos) {
        super(superficie);
        this.aulas = aulas;
        this.alumnos = alumnos;
    }
    getAulas() {
        return this.aulas;
    }
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

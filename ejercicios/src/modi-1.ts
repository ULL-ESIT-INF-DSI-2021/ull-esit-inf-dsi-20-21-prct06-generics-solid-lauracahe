type Deportes = 'baloncesto' | 'futbol' | 'balonmano';

interface Polideportivos{
  getSuperficie(): number;
  getDeportes():string;
  print(): void;
}

interface Edificios {
  getSuperficie(): number;
  print(): void;
}

class Polideportivo implements Polideportivos {
  constructor(private readonly superficie: number, private deportes: Deportes) {
  }

  getSuperficie() {
    return this.superficie;
  }

  getDeportes() {
    return this.deportes;
  }

  print(){
    console.log(`Polideportivo de ${this.getSuperficie} metros y se practica ${this.getDeportes()}.`);
  }
}

class Gym {
  constructor(private readonly aforo: number, private superficie: number) {
  }

  getSuperficie() {
    return this.superficie;
  }

  getAforo() {
    return this.aforo;
  }

  print(){
    console.log(`Gymnacio con aforo de ${this.getAforo()} personas y ${this.getSuperficie()} metros.`);
  }
}


abstract class Edificio implements Edificios {
  constructor(private superficie: number) {
  }

  getSuperficie() {
    return this.superficie;
  }

  abstract print(): void;
}

class Viviendas extends Edificio {
  constructor(superficie: number, private readonly viviendas: number) {
  super(superficie);
  }

  getViviendas(){
    return this.viviendas;
  }

  print(){
    console.log(`Vivienda con : ${this.getSuperficie()} de superficie y ${this.getViviendas()} viviendas.`);
  }
}

class Enseñanza extends Edificio {
  constructor(superficie: number, private readonly aulas: number, private readonly alumnos: number) {
  super(superficie);
  }

  getAulas(){
    return this.aulas;
  }

  getAlumnos(){
    return this.alumnos;
  }

  print(){
    console.log(`Enseñanza con : ${this.getSuperficie()} de superficie, ${this.getAulas()} aulas y ${this.getAlumnos()} alumnos.`);
  }
}

class Recinto<T extends Polideportivo, U extends Gym, Z extends Edificio> {
  constructor(private recinto: (T | U | Z)[]) {
  }

  print() {
    this.recinto.forEach((recinto) => {
      recinto.print();
    });
  }
}

const recintos =
    new Recinto<Polideportivo, Gym, Edificio>([
    new Polideportivo(125, 'baloncesto'),
    new Gym(25, 50),
    new Viviendas(30, 4),
    new Enseñanza(100, 30, 25),
  ]);
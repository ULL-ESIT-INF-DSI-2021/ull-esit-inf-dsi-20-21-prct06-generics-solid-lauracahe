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

export class Polideportivo implements Polideportivos {
  /**
   * 
   * @param superficie Superficie del recinto
   * @param deportes Deportes permitidos en el recinto
   */
  constructor(private readonly superficie: number, private deportes: Deportes) {
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
  print(){
    console.log(`Polideportivo de ${this.getSuperficie} metros y se practica ${this.getDeportes()}.`);
  }
}

class Gym implements Edificios {
  /**
   * 
   * @param aforo Aforo del gimnacio
   * @param superficie Superficie del gimnacio
   */
  constructor(private readonly aforo: number, private superficie: number) {
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
  print(){
    console.log(`Gymnacio con aforo de ${this.getAforo()} personas y ${this.getSuperficie()} metros.`);
  }
}


abstract class Edificio implements Edificios {
  /**
   * 
   * @param superficie Superficie del edificio
   */
  constructor(private superficie: number) {
  }

  /**
   * @return Devuelve la superficie del edificio
   */
  getSuperficie() {
    return this.superficie;
  }

  abstract print(): void;
}

class Viviendas extends Edificio {
  /**
   * 
   * @param superficie Superficie de la vivienda
   * @param viviendas Cantidad de viviendas
   */
  constructor(superficie: number, private readonly viviendas: number) {
  super(superficie);
  }

  /**
   * @return Número de viviendas
   */
  getViviendas(){
    return this.viviendas;
  }

  print(){
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
  constructor(superficie: number, private readonly aulas: number, private readonly alumnos: number) {
  super(superficie);
  }

  /**
   * @return Número de aulas
   */
  getAulas(){
    return this.aulas;
  }

  /**
   * @return Número de alumnos por aulas.
   */
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
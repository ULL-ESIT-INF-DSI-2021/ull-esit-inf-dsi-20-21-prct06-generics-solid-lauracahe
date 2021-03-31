/**
 * @brief Interface for a emission collection
 */
export interface Streamable<T> {
  collection: T[]

  /**
   * @brief Add a new emission to the collection
   * @param emission emission to add
   */
  add(emission: T): void;

  /**
   * @return Returns the collection of emissions
   */
  getCollection(): T[];
}


/**
 * @brief search interface
 */
export interface Search<T> {
   /**
   * @brief Finds the elements that have the specified attribute in the collection
   * @param attribute attribute to find
   * @param type type of attribute
   */
  search(attribute: string, type: string): T[]
}

export abstract class BasicStreamableCollection<T> implements Streamable<T>, Search<T>{
  /**
   * 
   * @param collection Create a collection to search or add an emission
   */
  constructor(public collection: T[]){}

  /**
   * @brief Add a new emission to the collection
   * @param emission emission to add
   */
  add(emission: T){
      this.collection.push(emission);
  }

  /**
   * @return Returns the collection of emissions
   */
  getCollection(){
      return this.collection;
  }

  /**
   * @brief Finds the elements that have the specified attribute in the collection
   * @param attribute attribute to find
   * @param type type of attribute
   */
  abstract search(attribute: string, type: string): T[]
}

/**
 * @brief Specifies the attributes that every series must have
 */
export type Serie = {
  name: string,
  genre: string,
  year: string,
  seasons: string,
  episodes: string
}

/**
* @brief Stores the series collection and allows searching within the collection
*/
export class Series extends BasicStreamableCollection<Serie>{
  /**
   * @param collection series collection (use BasicStreamableCollection template)
   */
  constructor(collection: Serie[]){
      super(collection);
  }

  /**
   * @brief Finds the elements that have the specified attribute in the collection
   * @param attribute attribute to find
   * @param type type of attribute
   */
  search(attribute :string, type :string){
    let result: Serie[] = [];
      
    switch(type){
      case "name":
        this.collection.forEach(value => {
          if (value.name === attribute) {
            result.push(value);
          }
        });
      break;

      case "genre":
        this.collection.forEach(value => {
          if (value.genre === attribute) {
            result.push(value);
          }
        });
      break;

      case "year":
        this.collection.forEach(value => {
          if (value.year === attribute) {
            result.push(value);
          }
        });
      break;

      case "seasons":
        this.collection.forEach(value => {
          if (value.seasons === attribute) {
            result.push(value);
          }
        });
      break;

      case "episodes":
        this.collection.forEach(value => {
          if (value.episodes === attribute) {
            result.push(value);
          }
        });
      break;

      default:
        break;
    }
    return result;
   }
}

/**
 * @brief Specify the attributes that a movie should have
 */
export type Movie = {
  name: string,
  genre: string,
  year: string,
  director :string,
  duration: string
}

/**
* @brief Stores the collection of movies and allows you to search within the collection
*/
export class Movies extends BasicStreamableCollection<Movie>{
  /**
   * @param collection movie collection (use BasicStreamableCollection template)
   */
  constructor(collection: Movie[]){
      super(collection);
  }

  /**
   * @brief Finds the elements that have the specified attribute in the collection
   * @param attribute attribute to find
   * @param type type of attribute
   */
  search(attribute: string, type: string){
    let result: Movie[] = [];
      
    switch (type){
      case "name":
        this.collection.forEach(value => {
          if (value.name == attribute) {
            result.push(value);
          }
        });
      break;

      case "genre":
        this.collection.forEach(value => {
          if (value.genre == attribute) {
            result.push(value);
          }
        });
      break;

      case "year":
        this.collection.forEach(value => {
          if (value.year == attribute) {
            result.push(value);
          }
        });
      break;

      case "director":
        this.collection.forEach(value => {
          if (value.director == attribute) {
            result.push(value);
          }
        });
      break;

      case "duration":
        this.collection.forEach(value => {
          if (value.duration == attribute) {
            result.push(value);
          }
        });
      break;

      default:
        break;
      }
      return result;
   }
}

/**
 * @brief Specify the attributes that a documentary should have
 */
export type Documentary = {
  name: string,
  genre: string,
  year: string,
  duration: string
}

/**
* @brief Stores the collection of documentaries and allows searching within the collection
*/
export class Documentaries extends BasicStreamableCollection<Documentary>{
  /**
   * @param collection Documentary collection (use BasicStreamableCollection template)
   */
  constructor(collection: Documentary[]){
      super(collection);
  }

  /**
   * @brief Finds the elements that have the specified attribute in the collection
   * @param attribute attribute to find
   * @param type type of attribute
   */
  search(attribute: string, type: string){
    let result: Documentary[] = [];
      
    switch (type){
      case "name":
        this.collection.forEach(value => {
          if (value.name == attribute) {
            result.push(value);
          }
        });
      break;

      case "genre":
        this.collection.forEach(value => {
          if (value.genre == attribute) {
            result.push(value);
          }
        });
      break;

      case "year":
        this.collection.forEach(value => {
          if (value.year == attribute) {
            result.push(value);
          }
        });
      break;

      case "duration":
        this.collection.forEach(value => {
          if (value.duration == attribute) {
            result.push(value);
          }
        });
      break;

      default:
        break;
    }

    return result;
   }
}

const series: Serie[] = [];
let serie1: Serie;
let serie2: Serie;

serie1 = {name: 'LCDP', genre: 'Action', year: '2017', seasons: '5', episodes: '40'};
serie2 = {name: 'Lupin', genre: 'Action', year: '2021', seasons: '1', episodes: '8'};

series.push(serie1);
series.push(serie2);

const collectionOfSerie = new Series(series);

console.log('Búsqueda de series del año 2017:');
console.log(collectionOfSerie.search('2017', 'year'));

const movies: Movie[] = [];
let movie1: Movie;
let movie2: Movie;

movie1 = {name: 'Bajo cero', genre: 'Action', year: '2020', director: 'Lluis Quilez', duration: '140'};
movie2 = {name: 'Venganza', genre: 'Action', year: '2017', director: 'Pierre Morel', duration: '190'};

movies.push(movie1);
movies.push(movie2);

const collectionOfMovie = new Movies(movies);

console.log('Búsqueda de películas de acción:');
console.log(collectionOfSerie.search('Action', 'genre'));

const documentaries: Documentary[] = [];
let documentary1: Documentary;
let documentary2: Documentary;

documentary1 = {name: 'Crip Camp', genre: 'Documental', year: '2020', duration: '150'};
documentary2 = {name: 'El escuadrón de la muerte', genre: 'Documental', year: '2017', duration: '190'};

documentaries.push(documentary1);
documentaries.push(documentary2);

const collectionOfDocumentary = new Documentaries(documentaries);

console.log('Búsqueda de documentales de duración 140: ');
console.log(collectionOfSerie.search('140', 'duration'));
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentaries = exports.Movies = exports.Series = exports.BasicStreamableCollection = void 0;
class BasicStreamableCollection {
    /**
     *
     * @param collection Create a collection to search or add an emission
     */
    constructor(collection) {
        this.collection = collection;
    }
    /**
     * @brief Add a new emission to the collection
     * @param emission emission to add
     */
    add(emission) {
        this.collection.push(emission);
    }
    /**
     * @return Returns the collection of emissions
     */
    getCollection() {
        return this.collection;
    }
}
exports.BasicStreamableCollection = BasicStreamableCollection;
/**
* @brief Stores the series collection and allows searching within the collection
*/
class Series extends BasicStreamableCollection {
    /**
     * @param collection series collection (use BasicStreamableCollection template)
     */
    constructor(collection) {
        super(collection);
    }
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    search(attribute, type) {
        let result = [];
        switch (type) {
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
exports.Series = Series;
/**
* @brief Stores the collection of movies and allows you to search within the collection
*/
class Movies extends BasicStreamableCollection {
    /**
     * @param collection movie collection (use BasicStreamableCollection template)
     */
    constructor(collection) {
        super(collection);
    }
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    search(attribute, type) {
        let result = [];
        switch (type) {
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
exports.Movies = Movies;
/**
* @brief Stores the collection of documentaries and allows searching within the collection
*/
class Documentaries extends BasicStreamableCollection {
    /**
     * @param collection Documentary collection (use BasicStreamableCollection template)
     */
    constructor(collection) {
        super(collection);
    }
    /**
     * @brief Finds the elements that have the specified attribute in the collection
     * @param attribute attribute to find
     * @param type type of attribute
     */
    search(attribute, type) {
        let result = [];
        switch (type) {
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
exports.Documentaries = Documentaries;
const series = [];
let serie1;
let serie2;
serie1 = { name: 'LCDP', genre: 'Action', year: '2017', seasons: '5', episodes: '40' };
serie2 = { name: 'Lupin', genre: 'Action', year: '2021', seasons: '1', episodes: '8' };
series.push(serie1);
series.push(serie2);
const collectionOfSerie = new Series(series);
console.log('Búsqueda de series del año 2017:');
console.log(collectionOfSerie.search('2017', 'year'));
const movies = [];
let movie1;
let movie2;
movie1 = { name: 'Bajo cero', genre: 'Action', year: '2020', director: 'Lluis Quilez', duration: '140' };
movie2 = { name: 'Venganza', genre: 'Action', year: '2017', director: 'Pierre Morel', duration: '190' };
movies.push(movie1);
movies.push(movie2);
const collectionOfMovie = new Movies(movies);
console.log('Búsqueda de películas de acción:');
console.log(collectionOfSerie.search('Action', 'genre'));
const documentaries = [];
let documentary1;
let documentary2;
documentary1 = { name: 'Crip Camp', genre: 'Documental', year: '2020', duration: '150' };
documentary2 = { name: 'El escuadrón de la muerte', genre: 'Documental', year: '2017', duration: '190' };
documentaries.push(documentary1);
documentaries.push(documentary2);
const collectionOfDocumentary = new Documentaries(documentaries);
console.log('Búsqueda de documentales de duración 140: ');
console.log(collectionOfSerie.search('140', 'duration'));

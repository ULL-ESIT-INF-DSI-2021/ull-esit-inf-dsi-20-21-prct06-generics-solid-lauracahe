import 'mocha';
import {expect} from 'chai';
import {Serie} from '../src/ejercicio-3';
import {Series} from '../src/ejercicio-3';
import {Movie} from '../src/ejercicio-3';
import {Movies} from '../src/ejercicio-3';
import {Documentary} from '../src/ejercicio-3';
import {Documentaries} from '../src/ejercicio-3';

describe('Serie type test', () => {
  it('Create a new serie', () => {
    let serie: Serie;
    serie = {name: 'LCDP', genre: 'Action', year: '2017', seasons: '5', episodes: '40'};
  });
});

describe('Movie type test', () => {
  it('Create a new movie', () => {
    let movie: Movie;
    movie = {name: 'Bajo cero', genre: 'Action', year: '2020', director: 'Lluis Quilez', duration: '140'};
  });
});

describe('Documentary type test', () => {
  it('Create a new documentary', () => {
    let documentary: Documentary;
    documentary = {name: 'Crip Camp', genre: 'Documental', year: '2020', duration: '150'};
  });
});

describe('Class that stores the collection of movies', () => {
  it('Create a new collection and search an elements that have the specified attribute', () => {
    const movies: Movie[] = [];
    let movie1: Movie;
    let movie2: Movie;
    
    movie1 = {name: 'Bajo cero', genre: 'Action', year: '2020', director: 'Lluis Quilez', duration: '140'};
    movie2 = {name: 'Venganza', genre: 'Action', year: '2017', director: 'Pierre Morel', duration: '190'};
    
    movies.push(movie1);
    movies.push(movie2);
    
    expect(new Movies(movies));
  });
});

describe('Class that stores the collection of series', () => {
  it('Create a new collection and search an elements that have the specified attribute', () => {
    const series: Serie[] = [];
    let serie1: Serie;
    let serie2: Serie;
    
    serie1 = {name: 'LCDP', genre: 'Action', year: '2017', seasons: '5', episodes: '40'};
    serie2 = {name: 'Lupin', genre: 'Action', year: '2021', seasons: '1', episodes: '8'};
    
    series.push(serie1);
    series.push(serie2);
    
    expect(new Series(series));
  });
});


describe('Class that stores the collection of documentary', () => {
  it('Create a new collection and search an elements that have the specified attribute', () => {
    const documentaries: Documentary[] = [];
    let documentary1: Documentary;
    let documentary2: Documentary;
    
    documentary1 = {name: 'Crip Camp', genre: 'Documental', year: '2020', duration: '150'};
    documentary2 = {name: 'El escuadrón de la muerte', genre: 'Documental', year: '2017', duration: '190'};
    
    documentaries.push(documentary1);
    documentaries.push(documentary2);
    
    expect(new Documentaries(documentaries));
  });
});

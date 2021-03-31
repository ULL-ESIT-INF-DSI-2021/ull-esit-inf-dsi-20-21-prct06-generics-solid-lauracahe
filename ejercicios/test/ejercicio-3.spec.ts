import 'mocha';
import {expect} from 'chai';
import {Streamable} from '../src/ejercicio-3';
import {Search} from '../src/ejercicio-3';
import {BasicStreamableCollection} from '../src/ejercicio-3';
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


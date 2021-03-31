import 'mocha';
import {expect} from 'chai';
import {BasicStatistics} from '../src/ejercicio-1';
import {Pokemon} from '../src/ejercicio-1';
import {Marvel} from '../src/ejercicio-1';
import {Combat} from '../src/ejercicio-1';

describe('BasicStatistics type test', () => {
  it('Create a new BasicStatistics', () => {
    let basicStatistic: BasicStatistics;
    basicStatistic = {attack: 84, defense: 78, speed: 100, hp: 78};
  });
});

describe('Pokemon constructor class test', () => {
  it('Create a new pokemon', () => {
    expect(new Pokemon('Charizard', 90.5, 1.7, {attack: 84, defense: 78, speed: 100, hp: 78}, 'pokemon', 'The fire dragon'));
  });
});

describe('Marvel constructor class test', () => {
  it('Create a new marvel', () => {
    expect(new Marvel('Aero', 78, 1.7, {attack: 52, defense: 90, speed: 60, hp: 50}, 'marvel', 'As a brilliant Chinese architect'));
  });
});

describe('Final combat between two fighters', () => {
  it('Create a combat between two fighters', () => {
    const Charizard = new Pokemon('Charizard', 90.5, 1.7, {attack: 84, defense: 78, speed: 100, hp: 78}, 'pokemon', 'The fire dragon');
    const Aero = new Marvel('Aero', 78, 1.7, {attack: 52, defense: 90, speed: 60, hp: 50}, 'marvel', 'As a brilliant Chinese architect');
    const finalCombat = new Combat<Pokemon, Marvel>(Charizard, Aero);
    expect(finalCombat.start());
  });
});


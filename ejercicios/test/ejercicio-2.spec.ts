import 'mocha';
import {expect} from 'chai';
import {Speed} from '../src/ejercicio-2';
import {Mass} from '../src/ejercicio-2';
import {Length} from '../src/ejercicio-2';
import {Time} from '../src/ejercicio-2';
import {Temperature} from '../src/ejercicio-2';
import {Volume} from '../src/ejercicio-2';

describe('Speed class test', () => {
  it('Convert speed units', () => {
    let speed = new Speed(6.8, 'mps');
    expect(speed.unitChange('kph'));
  });
});

describe('Mass class test', () => {
  it('Convert mass units', () => {
    let mass = new Mass(6.8, 'g');
    expect(mass.unitChange('kg'));
  });
});

describe('Length class test', () => {
  it('Convert Length units', () => {
    let length = new Length(6.8, 'cm');
    expect(length.unitChange('km'));
  });
});

describe('Time class test', () => {
  it('Convert Time units', () => {
    let time = new Time(6.8, 'm');
    expect(time.unitChange('s'));
  });
});

describe('Temperature class test', () => {
  it('Convert Temperature units', () => {
    let temperature = new Temperature(6.8, 'k');
    expect(temperature.unitChange('c'));
  });
});


describe('Volume class test', () => {
  it('Convert Volume units', () => {
    let volume = new Volume(6.8, 'm3');
    expect(volume.unitChange('l'));
  });
});

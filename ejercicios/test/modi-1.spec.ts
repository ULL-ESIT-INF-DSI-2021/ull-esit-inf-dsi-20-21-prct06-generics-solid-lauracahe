import 'mocha';
import {expect} from 'chai';
import {Polideportivo} from '../src/modi-1';

describe('Polideportivo constructor class test', () => {
  it('Create a new polideportivo', () => {
    expect(new Polideportivo(125, 'baloncesto'));
  });
});

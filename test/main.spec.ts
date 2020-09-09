import 'mocha';
import { expect } from 'chai';
import { romanToInt, intToRoman, calculateRomanNumbers } from '../src/main'

describe('Roman to number', () => {
  it('III is equal to 3', () => {
    const roman = 'III';
    const num = romanToInt(roman);
    expect(num).equal(3)
  });

  it('VIII is equal to 8', () => {
    const roman = 'VIII';
    const num = romanToInt(roman);
    expect(num).equal(8)
  });

  it('XIV is equal to 14', () => {
    const roman = 'XIV';
    const num = romanToInt(roman);
    expect(num).equal(14)
  });

  it('LX is equal to 60', () => {
    const roman = 'LX';
    const num = romanToInt(roman);
    expect(num).equal(60)
  });

  it('LXXIV is equal to 64', () => {
    const roman = 'LXXIV';
    const num = romanToInt(roman);
    expect(num).equal(74)
  });

  it('CM is equal to 900', () => {
    const roman = 'CM';
    const num = romanToInt(roman);
    expect(num).equal(900)
  });

});


describe('Number to roman', () => {
  it('3 is equal to III', () => {
    const num = 3;
    const roman = intToRoman(num);
    expect(roman).equal('III')
  });

  it('14 is equal to XIV', () => {
    const num = 14;
    const roman = intToRoman(num);
    expect(roman).equal('XIV')
  });

  it('60 is equal to LX', () => {
    const num = 60;
    const roman = intToRoman(num);
    expect(roman).equal('LX')
  });

  it('74 is equal to LXXIV', () => {
    const num = 74;
    const roman = intToRoman(num);
    expect(roman).equal('LXXIV')
  });

});


describe('Roman calculator', () => {
  it('XIV + LX = LXXIV', () => {
    const roman1 = 'XIV';
    const roman2 = 'LX';
    const sum = calculateRomanNumbers(roman1, roman2)
    expect(sum).equal('LXXIV')
  });

  it('XX + II = XXII', () => {
    const roman1 = 'XX';
    const roman2 = 'II';
    const sum = calculateRomanNumbers(roman1, roman2)
    expect(sum).equal('XXII')
  });

  it('II + II = IV', () => {
    const roman1 = 'II';
    const roman2 = 'II';
    const sum = calculateRomanNumbers(roman1, roman2)
    expect(sum).equal('IV')
  });

  it('D + D = M', () => {
    const roman1 = 'D';
    const roman2 = 'D';
    const sum = calculateRomanNumbers(roman1, roman2)
    expect(sum).equal('M')
  });

});
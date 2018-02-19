import { colorStringToColorHash } from './utils';

describe('colorStringToColorHash', () => {
  it('parse valid colors', () => {
    expect(colorStringToColorHash('#ffffff')).toEqual('ffffff');
    expect(colorStringToColorHash('white')).toEqual('ffffff');
    expect(colorStringToColorHash('#FFFFFF')).toEqual('ffffff');
    expect(colorStringToColorHash('rgb(255,255,255)')).toEqual('ffffff');
    expect(colorStringToColorHash('rgba(255,255,255,1)')).toEqual('ffffff');
    expect(colorStringToColorHash('rgba(255,255,255,0)')).toEqual('ffffff');
  });
  it('parse invalid colors', () => {
    expect(colorStringToColorHash('bla')).toBe(null);
    expect(colorStringToColorHash(null)).toBe(null);
    expect(colorStringToColorHash(3)).toBe(null);
    expect(colorStringToColorHash(undefined)).toBe(null);
  });
});

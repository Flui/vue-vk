import parseColor from 'parse-color';

/**
 * Swaps the keys with the values of an given object.
 * @param {*} object
 */
export function swapKeyValue(object) {
  return Object.keys(object).reduce((obj, key) => {
    const updatedObj = obj;
    updatedObj[object[key]] = key;
    return updatedObj;
  }, {});
}

/**
 * converts a color string to a color hash withoud the hash character.
 * @param {string} colorString
 * @returns {string}
 */
export function colorStringToColorHash(colorString) {
  const color = parseColor(colorString);

  if (color.hex) {
    const colorHex = color.hex.substring(1);
    return colorHex;
  }
  return null;
}

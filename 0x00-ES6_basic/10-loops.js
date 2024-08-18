export default function appendToEachArrayValue(array, appendString) {
  for (const i of array) {
    const index = array.indexOf(i);
    array[index] = appendString + i; // eslint-disable-line no-param-reassign
  }

  return array;
}

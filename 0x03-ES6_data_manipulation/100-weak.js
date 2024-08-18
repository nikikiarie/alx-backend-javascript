export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endPData = weakMap.get(endpoint);
    if (endPData >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (endPData + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};

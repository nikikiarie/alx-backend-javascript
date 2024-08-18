const cleanSet = (set, startString) => {
  const strngs = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((i) => {
    if (typeof i === 'string' && i.startsWith(startString)) {
      strngs.push(i.slice(startString.length));
    }
  });
  return strngs.join('-');
};

export default cleanSet;
export default function iterateThroughObject(reportWithIterator) {
  const empl = [];
  for (const i of reportWithIterator) {
    empl.push(i);
  }
  return empl.join(' | ');
}

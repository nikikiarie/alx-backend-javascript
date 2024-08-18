export default function createIteratorObject(report) {
  const arr = [];
  for (const i of Object.values(report.allEmployees)) {
    arr.push(...i);
  }
  return arr;
}

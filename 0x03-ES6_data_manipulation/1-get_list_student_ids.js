export default function getListStudentIds(arr) {
  let newArray = [];
  if (arr instanceof Array) {
    newArray = arr.map((i) => i.id);
  }

  return newArray;
}

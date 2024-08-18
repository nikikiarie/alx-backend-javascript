export default function getListStudentIds(arr) {
  let new_array = [];
  if (arr instanceof Array) {
    new_array = arr.map((i) => i.id);
  }

  return new_array;
}

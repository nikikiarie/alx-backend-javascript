export default function getStudentIdsSum(students) {
  return students.reduce((agggregate, student) => agggregate + student.id, 0);
}

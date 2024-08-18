/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((stdnt) => stdnt.location === city);
  return cityStudents.map((stdnt) => {
    const stdnt_filtered = newGrades.filter((grade) => grade.studentId === stdnt.id);
    if (stdnt_filtered.length > 0) {
      return {
        ...stdnt,
        grade: stdnt_filtered[0].grade,
      };
    }
    return {
      ...stdnt,
      grade: 'N/A',
    };
  });
}
  
export default updateStudentGradeByCity;

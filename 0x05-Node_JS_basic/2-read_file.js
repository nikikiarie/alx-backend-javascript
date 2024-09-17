const fs = require('fs');

const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const rows = fs
    .readFileSync(filePath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const groups = {};
  const titles = rows[0].split(',');
  const studentInfo = titles.slice(0, titles.length - 1);

  for (const row of rows.slice(1)) {
    const entries = row.split(',');
    const info = entries.slice(0, entries.length - 1);
    const groupName = entries[entries.length - 1];
    if (!Object.keys(groups).includes(groupName)) {
      groups[groupName] = [];
    }
    const studentData = studentInfo
      .map((header, index) => [header, info[index]]);
    groups[groupName].push(Object.fromEntries(studentData));
  }

  const total = Object
    .values(groups)
    .reduce((prev, curr) => (prev || []).length + curr.length);
  console.log(`Number of students: ${total}`);
  for (const [groupName, group] of Object.entries(groups)) {
    const names = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${groupName}: ${group.length}. List: ${names}`);
  }
};

module.exports = countStudents;

const express = require('express');
const fs = require('fs');

const server = express();
const serverPort = 1245;

function countStudents(filePath) {
  const studentGroups = {};
  const studentCounts = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let result = '';
        const dataLines = data.toString().split('\n');
        for (let i = 0; i < dataLines.length; i += 1) {
          if (dataLines[i]) {
            totalStudents += 1;
            const studentData = dataLines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentGroups, studentData[3])) {
              studentGroups[studentData[3]].push(studentData[0]);
            } else {
              studentGroups[studentData[3]] = [studentData[0]];
            }
            if (Object.prototype.hasOwnProperty.call(studentCounts, studentData[3])) {
              studentCounts[studentData[3]] += 1;
            } else {
              studentCounts[studentData[3]] = 1;
            }
          }
        }
        const studentCount = totalStudents - 1;
        result += `Number of students: ${studentCount}\n`;
        for (const [group, count] of Object.entries(studentCounts)) {
          result += `Number of students in ${group}: ${count}. `;
          result += `List: ${studentGroups[group].join(', ')}\n`;
        }
        resolve(result);
      }
    });
  });
}

server.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

server.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((studentReport) => {
    res.send(['This is the list of our students', studentReport].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

server.listen(serverPort, () => {
  console.log(`Server is listening on port ${serverPort}`);
});

module.exports = server;

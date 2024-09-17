const express = require('express');
const fs = require('fs');

const server = express();
const serverPort = 1245;

function listStudents(dataFile) {
  const studentGroups = {};
  const studentCounts = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(dataFile, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let resultText = '';
        const dataLines = data.toString().split('\n');
        for (let j = 1; j < dataLines.length; j += 1) {
          if (dataLines[j]) {
            totalStudents += 1;
            const studentData = dataLines[j].toString().split(',');
            const group = studentData[3];
            const name = studentData[0];

            if (Object.prototype.hasOwnProperty.call(studentGroups, group)) {
              studentGroups[group].push(name);
            } else {
              studentGroups[group] = [name];
            }

            if (Object.prototype.hasOwnProperty.call(studentCounts, group)) {
              studentCounts[group] += 1;
            } else {
              studentCounts[group] = 1;
            }
          }
        }

        const studentCount = totalStudents;
        resultText += `Number of students: ${studentCount}\n`;
        for (const [group, count] of Object.entries(studentCounts)) {
          resultText += `Number of students in ${group}: ${count}. `;
          resultText += `List: ${studentGroups[group].join(', ')}\n`;
        }
        resolve(resultText);
      }
    });
  });
}

server.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

server.get('/students', (req, res) => {
  listStudents(process.argv[2].toString()).then((studentReport) => {
    res.send(['This is the list of our students', studentReport].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

server.listen(serverPort, () => {
  console.log(`Server is listening on port ${serverPort}`);
});

module.exports = server;

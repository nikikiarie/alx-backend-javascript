const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const serverPort = 1245;

function countStudents(filePath) {
  const studentList = {};
  const studentCount = {};
  let total = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, fileData) => {
      if (error) {
        reject(error);
      } else {
        let result = '';
        const rows = fileData.toString().split('\n');
        for (let i = 0; i < rows.length; i += 1) {
          if (rows[i]) {
            total += 1;
            const columns = rows[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentList, columns[3])) {
              studentList[columns[3]].push(columns[0]);
            } else {
              studentList[columns[3]] = [columns[0]];
            }
            if (Object.prototype.hasOwnProperty.call(studentCount, columns[3])) {
              studentCount[columns[3]] += 1;
            } else {
              studentCount[columns[3]] = 1;
            }
          }
        }
        const totalStudents = total - 1;
        result += `Number of students: ${totalStudents}\n`;
        for (const [group, count] of Object.entries(studentCount)) {
          if (group !== 'field') {
            result += `Number of students in ${group}: ${count}. `;
            result += `List: ${studentList[group].join(', ')}\n`;
          }
        }
        resolve(result);
      }
    });
  });
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const finalResult = output.slice(0, -1);
      res.end(finalResult);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

server.listen(serverPort, host, () => {
});

module.exports = server;

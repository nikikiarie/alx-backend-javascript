const fs = require('fs');

module.exports = function readDatabase(filePath) {
  const studs = {};
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const fileLines = data.toString().split('\n');
        const rows = fileLines.slice(1);
        for (let j = 0; j < rows.length; j += 1) {
          if (rows[j]) {
            const info = rows[j].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studs, info[3])) {
              studs[info[3]].push(info[0]);
            } else {
              studs[info[3]] = [info[0]];
            }
          }
        }
        resolve(studs);
      }
    });
  });
};

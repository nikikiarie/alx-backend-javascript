const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const result = [];
      result.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let j = 0; j < keys.length; j += 1) {
        result.push(`Number of students in ${keys[j]}: ${students[keys[j]].length}. List: ${students[keys[j]].join(', ')}`);
      }
      res.status(200).send(result.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const record = req.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(record in students)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${students[record].join(', ')}`);
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;

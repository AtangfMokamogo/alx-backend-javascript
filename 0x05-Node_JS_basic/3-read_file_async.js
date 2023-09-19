const fs = require('fs');
const csv = require('csv-parser');

/**
 * Const number of students in a field.
 * @function
 * @param {String} filepath - The first number.
 * @author Atang Mokamogo
 */
async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    const students = {};
    let numStudents = 0;
    let isHeader = true;

    fs.createReadStream(filePath)
      .pipe(csv({ skipEmptyLines: true, headers: ['firstname', 'lastname', 'age', 'field'] }))
      .on('data', (row) => {
        if (isHeader) {
            isHeader = false;
            return;
        }

        if (row.firstname && row.lastname && row.age && row.field) {
          numStudents += 1;
          const field = row.field.trim();
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(row.firstname);
        }
      })
      .on('end', () => {
        if (numStudents === 0) {
          reject(new Error('Cannot load the database'));
        } else {
          console.log(`Number of students: ${numStudents}`);
          for (const field in students) {
            console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
          }
          resolve();
        }
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = countStudents;
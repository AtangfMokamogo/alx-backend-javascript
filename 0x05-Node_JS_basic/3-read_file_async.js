const fs = require('fs');

/**
 * Const number of students in a field.
 * @function
 * @param {String} filepath - The first number.
 * @author Atang Mokamogo
 */
async function countStudents (filePath) {
  return new Promise((resolve, reject) => {
    const students = {};
    let numStudents = 0;
    let isHeader = true;

    try {
      const studentData = fs.readFileSync(filePath, 'utf-8').split('\n');

      for (let i = 0; i < studentData.length; i++) {
        const row = studentData[i].trim();
        if (isHeader) {
          isHeader = false;
          continue;
        }

        const [firstname, lastname, age, field] = row.split(',');

        if (firstname && lastname && age && field) {
          numStudents += 1;
          const trimmedField = field.trim();
          if (!students[trimmedField]) {
            students[trimmedField] = [];
          }
          students[trimmedField].push(firstname);
        }
      }

      if (numStudents === 0) {
        reject(new Error('Cannot load the database'));
      } else {
        console.log(`Number of students: ${numStudents}`);
        for (const field in students) {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = countStudents;

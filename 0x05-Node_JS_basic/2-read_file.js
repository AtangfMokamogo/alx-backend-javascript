const fs = require('fs');

/**
 * Const number of students in a field.
 * @function
 * @param {String} filepath - The first number.
 * @author Atang Mokamogo
 */
function countStudents(filepath) {
  try {
    const students = {};

    let isHeader = true;

    const fileData = fs.readFileSync(filepath, 'utf-8');

    fileData
      .split('\n')
      .forEach((line) => {
        if (isHeader) {
          isHeader = false;
          return;
        }

        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          if (!students[field]) {
            students[field] = { count: 0, list: [] };
          }
          students[field].count += 1;
          students[field].list.push(firstname);
        }
      });

    const numStudents = Object.values(students).reduce((total, field) => total + field.count, 0);
    console.log(`Number of students: ${numStudents}`);

    for (const field in students) {
      if (students.hasOwnProperty.call(field)) {
        const { count, list } = students[field];
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

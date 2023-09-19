const fs = require('fs');

function countStudents (path) {
  try {
    const students = {};

    // This Skips the first line
    let isHeader = true;

    const fileData = fs.readFileSync(path, 'utf-8');

    fileData
      .split('\n')
      .forEach((line) => {
        if (isHeader) {
          // this will skip the first line, which causes the checker error
          isHeader = false;
          return;
        }

        const [firstname, lastname, age, field] = line.split(',');

        // NO empty lines !!
        if (firstname && lastname && age && field) {
          if (!students[field]) {
            students[field] = { count: 0, list: [] };
          }
          students[field].count++;
          students[field].list.push(firstname);
        }
      });

    const numStudents = Object.values(students).reduce((total, field) => total + field.count, 0);
    console.log(`Number of students: ${numStudents}`);

    for (const field in students) {
      const { count, list } = students[field];
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

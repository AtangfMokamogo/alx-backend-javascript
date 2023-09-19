const http = require('http');
const fs = require('fs');

const port = 1245;
const host = 'localhost';

/**
 * Const number of students in a field.
 * @function
 * @param {String} filepath - The expected file path
 * @author Atang Mokamogo
 */
function countStudents (filePath) {
  return new Promise((resolve, reject) => {
    const students = {};
    let numStudents = 0;
    let isHeader = true;

    try {
      const studentData = fs.readFileSync(filePath, 'utf-8').split('\n');

      for (let i = 0; i < studentData.length; i += 1) {
        const row = studentData[i].trim();

        if (!isHeader) {
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

        isHeader = false;
      }

      if (numStudents === 0) {
        reject(new Error('Cannot load the database'));
      } else {
        let resData = 'This is the list of our students\n';
        resData += `Number of students: ${numStudents}\n`;
        for (const field in students) {
          if (field in students) {
            resData += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
          }
        }
        resData += 'Done!';
        resolve(resData);
      }
    } catch (error) {
      reject(error);
    }
  });
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        const response = await countStudents('database.csv');
        res.end(response); // Send the resolved response.
      } catch (error) {
        console.log(error);
        res.end('Error: Cannot load the database');
      }
      break;
    default:
      res.end('Not Found');
      break;
  }
});

app.listen(port, () => {
  console.log(`Server listening at -> http://${host}:${port}\n`);
});

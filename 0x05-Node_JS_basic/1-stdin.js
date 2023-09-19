process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const dataStream = process.stdin.read();

  if (dataStream) {
    process.stdout.write(`Your name is: ${dataStream}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

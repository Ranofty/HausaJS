const fs = require('fs');
const { runHausaCode } = require('./index');

const filePath = process.argv[2];
if (!filePath) {
  console.error('Please provide a file path');
  process.exit(1);
}

const hausaCode = fs.readFileSync(filePath, 'utf-8');
runHausaCode(hausaCode);

const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');
  let newLines = [];
  
  let inBlockComment = false;
  let inJsxComment = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let trimmed = line.trim();

    // Check if ending block comments
    if (inBlockComment) {
      if (trimmed.endsWith('*/') || trimmed.includes('*/')) {
        inBlockComment = false;
        // If there's code after */ we should keep it, but for simplicity assuming lines are mostly just comments
      }
      continue;
    }

    if (inJsxComment) {
      if (trimmed.endsWith('*/}') || trimmed.includes('*/}')) {
        inJsxComment = false;
      }
      continue;
    }

    // Check if starting block comments
    if (trimmed.startsWith('/*')) {
      if (!trimmed.endsWith('*/') && !trimmed.includes('*/')) {
        inBlockComment = true;
      }
      continue;
    }

    if (trimmed.startsWith('{/*')) {
      if (!trimmed.endsWith('*/}') && !trimmed.includes('*/}')) {
        inJsxComment = true;
      }
      continue;
    }

    // Single line comments
    if (trimmed.startsWith('//')) {
      continue;
    }

    // Single line block/jsx comments
    if (trimmed.startsWith('/*') && trimmed.endsWith('*/')) {
      continue;
    }
    if (trimmed.startsWith('{/*') && trimmed.endsWith('*/}')) {
      continue;
    }

    newLines.push(line);
  }

  const newContent = newLines.join('\n');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Cleaned: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
console.log("Comment removal complete.");

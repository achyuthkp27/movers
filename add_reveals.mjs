import fs from 'fs';
import path from 'path';

const dir = './src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.match(/<h[23]/) && !content.includes('Reveal')) {
    // Add import right after 'use client'; or the first import
    if (content.includes("'use client';")) {
      content = content.replace("'use client';", "'use client';\nimport Reveal from '@/components/ui/Reveal';\n");
    } else {
      content = "import Reveal from '@/components/ui/Reveal';\n" + content;
    }
    
    // Replace <h3...>...</h3> with <Reveal as="h3"...>...</Reveal>
    content = content.replace(/<h3([^>]*)>([\s\S]*?)<\/h3>/g, '<Reveal as="h3"$1>$2</Reveal>');
    
    // Replace <h2...>...</h2> with <Reveal as="h2"...>...</Reveal>
    content = content.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, '<Reveal as="h2"$1>$2</Reveal>');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}

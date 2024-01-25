const fs = require('fs');
const path = require('path');
const base_dir = './';
const projects = {
  // Dependencies for "editorjs_canto" module.
  "editorjs/tools/canto.min.js": require.resolve('@drewble/editorjs-canto'),
}

Object.keys(projects).forEach(filename => {

  const source = projects[filename];
  const output = base_dir + filename;
  const destination = path.dirname(output);
  if (!fs.existsSync(destination)){
    fs.mkdirSync(destination, { recursive: true });
  }

  fs.copyFile(source, output, (err) => {
    if (err) throw err;
    console.log(`Create: "${output}" file`);
  });
})

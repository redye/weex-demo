// Helper functions
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const sourcer = require('sourcer');

const root = (args) => {
  return path.join(ROOT, 'src', args);
}

const entrys = () => {
  const root = process.cwd();
  const reg = new RegExp('\\.(' + 'vue|we' + ')$');
  const source = sourcer.find(root, 'src', {
    recursive: true
  }).filter(s => reg.test(path.extname(s)));
  const base = sourcer.base('src');
  const entrys = {};
  source.forEach(s => {
    let file = path.relative(path.resolve(base), s);
    file = file.replace(/\.\w+$/, '');
    entrys[file] = s + '?entry=true';
  });
  const entry = path.join(ROOT, 'src', 'index.js');
  entrys.index = entry + '?entry=true';
  console.log(`entrys ==> ${JSON.stringify(entrys)}`);
  return entrys;
}

const rootNode = (args) => {
  return path.join(ROOT, args);
}

const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  root,
  entrys,
  rootNode,
  resolve
}
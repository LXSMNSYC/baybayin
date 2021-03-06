import * as baybayin from 'baybayin';
import * as dat from 'dat.gui';

const element = document.getElementById('app');

const CODE = `import * as baybayin from 'baybayin';

const element = document.getElementById('app');

const CODE = \`
import * as baybayin from 'baybayin';

const element = document.getElementById('app');

baybayin.setCDN('https://unpkg.com/shiki/');

if (element) {
  const editor = new baybayin.Editor(element, {
    value: "console.log('Hello World');",
    languages: ['javascript'],
    themes: ['github-dark'],
  });
}
\`;

baybayin.setCDN('https://unpkg.com/shiki/');

if (element) {
  const editor = new baybayin.Editor(element, {
    value: CODE,
    languages: ['javascript'],
    themes: ['github-dark'],
  });

  editor.load().then(() => {
    console.log('Editor ready');
  });
}
`;

baybayin.setCDN('https://unpkg.com/shiki/');

if (element) {
  const opts = {
    lineNumbers: false,
    readonly: false,
    theme: 'dark-plus',
    language: 'javascript',
  };
  const editor = new baybayin.Editor(element, {
    value: CODE,
    languages: ['javascript'],
    themes: ['dark-plus'],
  });

  editor.load().then(() => {
    console.log('Editor ready');
  });
 
  const gui = new dat.GUI({
    name: 'Baybayin Settings',
  });

  gui.add(opts, 'language', baybayin.LANGUAGES).onChange((value) => {
    editor.setLanguage(value);
  });
  gui.add(opts, 'theme', baybayin.THEMES).onChange((value) => {
    editor.setTheme(value);
  });
  gui.add(opts, 'lineNumbers', false).onChange((value) => {
    editor.setLineNumbers(value);
  });
  gui.add(opts, 'readonly', false).onChange((value) => {
    editor.setReadonly(value);
  });
}
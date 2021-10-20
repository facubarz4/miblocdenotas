
import { tabSupport } from './utils.js';

const textarea = document.querySelector('#content');

textarea.addEventListener('keydown', tabSupport)
textarea.addEventListener('input', updateOutput);

textarea.textContent = localStorage.getItem('content');

function updateOutput() {
  localStorage.setItem('content', textarea.value);
}

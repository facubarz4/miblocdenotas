
import { tabSupport } from './utils.js';

diegolosinoGreetings();
const textarea = document.querySelector('#content');

textarea.addEventListener('keydown', tabSupport)
textarea.addEventListener('input', updateOutput);

textarea.textContent = localStorage.getItem('content');

function updateOutput() {
  localStorage.setItem('content', textarea.value);
}

function diegolosinoGreetings() {
  const logStyle = 'color: #BADA55; font-size: 32px; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
  console.log('%c-------------------------------------------------', logStyle);
  console.log('%c---------- DIEGOLOSINO, TE QUEREMOS--------------', logStyle);
  console.log('%c-------------------------------------------------', logStyle);
}

const boldButton = document.querySelector('#bold')
const italicButton = document.querySelector('#italic')
const fontFamilySelect = document.querySelector('[name="font-family"]')
const fontSizeSelect = document.querySelector('[name="font-size"]')
const colorPicker = document.querySelector('input[name="color"]')
const textarea = document.querySelector('#content');

boldButton.addEventListener('click', handleBoldClick)
italicButton.addEventListener('click', handleItalicClick)
fontFamilySelect.addEventListener('change', handleFieldChange)
fontSizeSelect.addEventListener('change', handleFieldChange)
colorPicker.addEventListener('change', handleFieldChange)

let isBold = false;
let isItalic = false;

function handleBoldClick() {
  isBold = !isBold
  textarea.style.setProperty('font-weight', isBold ? 'bold' : 'normal')
  this.classList.toggle('active')
}

function handleItalicClick() {
  isItalic = !isItalic
  textarea.style.setProperty('font-style', isItalic ? 'italic' : 'normal')
  this.classList.toggle('active')
}

function handleFieldChange() {
  textarea.style.setProperty(this.name, this.value)
}

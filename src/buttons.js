const eraseButton = document.querySelector('#eraseText');
const copyButton = document.querySelector('#copy');
const downloadButton = document.querySelector('#download');

eraseButton.addEventListener('click', handleEraseClick);
copyButton.addEventListener('click', handleCopyClick);
downloadButton.addEventListener('click', handleDownloadClick);

function handleEraseClick(e) {
  document.getElementById("content").value = "";
}

function handleCopyClick(e) {
  document.querySelector("textarea").select();
  document.execCommand('copy');
}

function handleDownloadClick(e){
  const content = document.getElementById("content");
  const text = content.value.replace(/\n/g, "\r\n");
  const blob = new Blob([text], { type: "text/plain"});
  const anchor = document.createElement("a");

  anchor.download = "MiNota.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target ="_blank";
  anchor.style.display = "none"; 
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

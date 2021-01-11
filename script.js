window.onload = function () {
  drawBoxes();
};

function drawBoxes() {
  var html = `<div class="red-box"></div>`;
  var body = document.getElementsByTagName("body")[0];
  body.innerHTML = html;
}

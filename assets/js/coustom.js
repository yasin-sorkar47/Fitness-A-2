let list = document.getElementById("list");
let solidBar = document.getElementById("solidBar");

solidBar.addEventListener("click", showAndHide);

function showAndHide() {
  if (list.style.display === "block") {
    list.style = `
    display: none;
    `;
  } else {
    list.style = `
    display: block;
    `;
  }
}

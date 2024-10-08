let showBtn = document.getElementById("showBtn");
let popupOverLay = document.getElementById("popupOverlay");
let popUpBox = document.querySelector(".popupbox");
let addBook = document.getElementById("addBook");
let closeBtn = document.getElementById("closeBtn");

showBtn.addEventListener("click", function () {
  popupOverLay.style.display = "block";
  popUpBox.style.display = "block";
});

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverLay.style.display = "none";
  popUpBox.style.display = "none";
});

let container = document.querySelector(".container");
let bookAuthorIp = document.getElementById("book-author-ip");
let bookTitleIp = document.getElementById("book-title-ip");
let bookDescriptionInput = document.getElementById("book-description-input");

addBook.addEventListener("click", function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `
  <h2>${bookTitleIp.value}</h1>
  <h5>${bookAuthorIp.value}</h5>
  <p>${bookDescriptionInput.value}</p>
  <button onclick="deleteBook(event)">Delete</button>
  `;

  bookTitleIp.value = "";
  bookAuthorIp.value = "";
  bookDescriptionInput.value = "";
  container.append(div);
  popupOverLay.style.display = "none";
  popUpBox.style.display = "none";
});

function deleteBook(event) {
  event.target.parentElement.remove();
  console.log(event);
}

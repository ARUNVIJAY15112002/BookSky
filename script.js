let showBtn = document.getElementById("showBtn");
let popupOverLay = document.getElementById("popupOverlay");
let popUpBox = document.querySelector(".popupbox");
let addBook = document.getElementById("addBook");
let closeBtn = document.getElementById("closeBtn");

let bookList = [];

console.log(bookList);

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
  <h2>${bookTitleIp.value}</h2>
  <h5>${bookAuthorIp.value}</h5>
  <p>${bookDescriptionInput.value}</p>
  <button onclick="deleteBook(event)">Delete</button> 
  `;

  bookList.push(div.innerHTML);

  console.log(bookList);
  localStorage.setItem("BookList", JSON.stringify(bookList));
  bookTitleIp.value = "";
  bookAuthorIp.value = "";
  bookDescriptionInput.value = "";
  container.append(div);
  popupOverLay.style.display = "none";
  popUpBox.style.display = "none";
});

function deleteBook(event) {
  event.target.parentElement.remove();
  bookList = bookList.filter(
    (book) => book !== event.target.parentElement.innerHTML
  );
  localStorage.setItem("BookList", JSON.stringify(bookList));
  console.log(bookList);
}

function DisplayRetrivedData() {
  if (JSON.parse(localStorage.getItem("BookList")) !== null) {
    bookList = JSON.parse(localStorage.getItem("BookList"));
    console.log(bookList);
    for (let i = 0; i < bookList.length; i++) {
      const div = document.createElement("div");
      div.setAttribute("class", "book-container");
      div.innerHTML = bookList[i];
      container.append(div);
    }
  }
}

DisplayRetrivedData();

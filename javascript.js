const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book");
const closeBookBtn = document.getElementById("close-book-modal");
const addBookBtnDialog = document.getElementById("add-book-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const isReadInput = document.getElementById("is-read");
const displayBook = document.getElementById("book");
const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary(){
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = isReadInput.checked;
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    isReadInput.checked = false;
    displayNewBookOnPage();
};

function displayNewBookOnPage(){
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookPages = document.createElement('div');
    let bookIsRead = document.createElement('div');

    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    bookIsRead.classList.add('book-is-read');

    myLibrary.forEach(book => {
        bookTitle.textContent = '"' + book.title + '"';
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + " " + "pages";
        if (book.isRead){
            bookIsRead.textContent = "Read";
        } else {
            bookIsRead.textContent = "Not read";
        }
        displayBook.appendChild(bookTitle);
        displayBook.appendChild(bookAuthor);
        displayBook.appendChild(bookPages);
        displayBook.appendChild(bookIsRead);
        })
};

addBookBtnDialog.addEventListener("click", addBookToLibrary);

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBookBtn.addEventListener("click", () => {
    dialog.close();
});
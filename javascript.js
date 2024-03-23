const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book");
const closeBookBtn = document.getElementById("close-book-modal");
const addBookBtnDialog = document.getElementById("add-book-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const isReadInput = document.getElementById("is-read");
const displayBook = document.getElementById("display-books");
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
    displayBook.innerHTML = "";

    myLibrary.forEach(book => {
        let bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        let bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        let bookPages = document.createElement('p');
        bookPages.classList.add('book-pages');
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
        let buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');
        let removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-button');
        let bookIsRead = document.createElement('div');
        bookIsRead.classList.add('book-is-read');

        bookTitle.textContent = '"' + book.title + '"';
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + " " + "pages";
        bookIsRead.textContent = book.isRead ? "Read" : "Not read";

        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        bookContainer.appendChild(buttonGroup)
        buttonGroup.appendChild(bookIsRead);
        buttonGroup.appendChild(removeBtn);
        displayBook.appendChild(bookContainer);
        
        removeBtn.addEventListener("click", () => {
            myLibrary.pop();
            bookContainer.remove();
        });
        })
};

addBookBtnDialog.addEventListener("click", addBookToLibrary);

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBookBtn.addEventListener("click", () => {
    dialog.close();
});
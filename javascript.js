const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book");
const closeBookBtn = document.getElementById("close-book-modal");
const addBookBtnDialog = document.getElementById("add-book-button");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const isReadInput = document.getElementById("is-read");
const displayBook = document.getElementById("display-books");
const errorMsg = document.getElementById("errormsg");
const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.toggleReadStatus = function(isRead){
        this.isRead = isRead;
    }
};

function addBookToLibrary(){
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = isReadInput.checked;
    const newBook = new Book(title, author, pages, isRead);

    if (titleInput.value !== "" && authorInput.value !== "" && pagesInput.value !== ""){
        myLibrary.push(newBook);
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        isReadInput.checked = false;
        displayNewBookOnPage();
        dialog.close();
    } else {
        errorMsg.innerText = "Please complete all fields."
    }
};

function clearErrorMsgAfterUserInput(){
    titleInput.addEventListener("input", () => {
        if (titleInput.value !== ""){
            errorMsg.innerText = "";
        }
    });
    authorInput.addEventListener("input", () => {
        if (authorInput.value !== ""){
            errorMsg.innerText = "";
        }
    })
    pagesInput.addEventListener("input", () => {
        if (pagesInput.value !== ""){
            errorMsg.innerText = ""
        }
    })
};

function createBookElement(book){
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let bookContainer = document.createElement('div');
    let buttonGroup = document.createElement('div');
    let bookIsRead = document.createElement('div');
    let removeBtn = document.createElement('button');

    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    bookContainer.classList.add('book');
    buttonGroup.classList.add('button-group');
    bookIsRead.classList.add('book-is-read');
    removeBtn.classList.add('remove-button');

    removeBtn.textContent = "Remove";

    bookTitle.textContent = '"' + book.title + '"';
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages + " " + "pages";
    bookIsRead.textContent = book.isRead ? "Read" : "Not read";

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(buttonGroup);
    
    buttonGroup.appendChild(bookIsRead);
    buttonGroup.appendChild(removeBtn);

    bookIsRead.addEventListener("click", () => {
        book.toggleReadStatus;
    })

    removeBtn.addEventListener("click", () => {
        myLibrary.pop();
        bookContainer.remove();
    });

    return bookContainer;
};


function displayNewBookOnPage(){
    displayBook.innerHTML = "";

    myLibrary.forEach(book => {
        const bookElement = createBookElement(book);
        displayBook.appendChild(bookElement);
    })
};

addBookBtnDialog.addEventListener("click", addBookToLibrary);

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBookBtn.addEventListener("click", () => {
    dialog.close();
    errorMsg.innerText = "";
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    isReadInput.checked = false;
});

clearErrorMsgAfterUserInput();
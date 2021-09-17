let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${(this.hasRead) ? "already read" : "not read yet"}.`;

const createBook = (title, author, pages, hasRead) => {
    const book = new Book(title, author, pages, hasRead);
    return book;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book, index) {
    const card = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookReadLabel = document.createElement("label");
    const bookRead = document.createElement("input");

    card.setAttribute("class", "bookCard");
    card.setAttribute("id", `book${index}`);
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookReadLabel.setAttribute("for", "bookRead");
    bookReadLabel.setAttribute("id", "bookReadLabel");
    bookReadLabel.textContent = "Read the book";
    bookRead.setAttribute("type", "checkbox");
    bookRead.setAttribute("name", "bookRead");
    bookRead.checked = book.hasRead;

    document.body.appendChild(card);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadLabel);
    card.appendChild(bookRead);
}

function displayAllBooks() {
    myLibrary.forEach((book, index) => {
        displayBook(book, index);
    });
}

addBookToLibrary(createBook("The Hobbit", "J.R.R Tolkien", 295, true));
addBookToLibrary(createBook("Harry Potter", "J.K. Rowling", 435, false));
addBookToLibrary(createBook("The Hobbit 2", "J.R.R Tolkien", 257, true));
// console.log(myLibrary);

displayAllBooks();
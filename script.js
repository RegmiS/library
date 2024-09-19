const myLibrary = [];

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
};

// function that loops through and displays each book (table/card)
// new book button with forms. forms in sidebar? dialogs/modals?
// button to remove book from library
// button on book to change display and change it's "read" status

function Book (title, author, pages, read) {
    const wasRead = () => read=true;
    const notRead = () => read=false;
    const info = () => {
        let str = read ? "read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${str}`;
    };
    return { title, author, pages, read, info, wasRead, notRead };
};

const hobbit = Book("hobbit", "tolkien", 400, false);
const lotr = Book("lotr", "toklien", 500, "true");

function displayBooks(){
    const bookList = document.querySelector("#book-list");
    const content = document.createElement('li');
    content.textContent = "test";
    bookList.appendChild(content);
}

displayBooks();
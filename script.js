const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let str = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${str}`;
    }
}

function addBookToLibrary() {
    // do stuff here
  }


const hobbit = new Book("hobbit", "tolkien", 400, false);
console.log(hobbit.info())

// function that loops through and displays each book (table/card)
// new book button with forms. forms in sidebar? dialogs/modals?
// button to remove book from library
// button on book to change display and change it's "read" status
class Library {
    myLibrary = [];
    add(Book){
        this.myLibrary.push(Book);
    }
    remove(Book){
        this.myLibrary.splice(this.myLibrary.findIndex(val => val==Book),1);
    }
    getAll(){
        return this.myLibrary;
    }
}

class Book {
    constructor (title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    unread(){
        this.read = false;
    }
    read() {
        this.read = true;
    }
    getTitle() {return this.title;}
    getAuthor() {return this.author;}
    getPages() {return this.pages;}
    getRead() {return this.read;}
    swapStates() {
        if(this.read == true){
            this.read = false;
        }
        else{
            this.read = true;
        }
    }
}

let library = new Library();
let hobbit = new Book("hobbit", "tolkien", 400, false);
library.add(hobbit);
let lotr = new Book("lotr", "toklien", 500, true);
library.add(lotr);

const attachUpdate = (book) => {
    book.swapStates();
    renderBooks();
}

const removeBook = (book) => {
    library.remove(book);
    renderBooks();
}

const renderBooks = () => {
    const bookslist = document.querySelector('#book-list');
    bookslist.innerHTML = "";
    library.getAll().forEach(book => {
        const divMain = document.createElement("div");

        const titleEl = document.createElement("p");
        titleEl.classList = "";
        titleEl.innerHTML = book.getTitle();
        divMain.appendChild(titleEl);

        const authorEl = document.createElement("p");
        authorEl.classList = "";
        authorEl.innerHTML = book.getAuthor();
        divMain.appendChild(authorEl);

        const pagesEl = document.createElement("p");
        pagesEl.classList = "";
        pagesEl.innerHTML = book.getPages();
        divMain.appendChild(pagesEl);

        const statusEl = document.createElement("p");
        statusEl.classList = "";
        statusEl.innerHTML = book.getRead();
        divMain.appendChild(statusEl);

        const buttonRead = document.createElement("button");
        buttonRead.classList = "";
        buttonRead.innerHTML = "Update";
        buttonRead.addEventListener('click', attachUpdate.bind(buttonRead, book));
        divMain.appendChild(buttonRead);

        const buttonDel = document.createElement("button");
        buttonDel.classList = "";
        buttonDel.innerHTML = "Remove";
        buttonDel.addEventListener('click', removeBook.bind(buttonDel, book));

        divMain.appendChild(buttonDel);
        bookslist.appendChild(divMain);
    });
}

renderBooks();
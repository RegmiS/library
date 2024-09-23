const myLibrary = [];

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function Book (title, author, pages, read) {
    const wasRead = () => read=true;
    const notRead = () => read=false;
    const readVal = () => {return read};
    const info = () => {
        let str = read ? "read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${str}`;
    };
    return { title, author, pages, read, info, wasRead, notRead, readVal };
}

const hobbit = Book("hobbit", "tolkien", 400, false);
const lotr = Book("lotr", "toklien", 500, true);
addBookToLibrary(hobbit);
addBookToLibrary(lotr);

const bookList = document.querySelector("#book-list");

function removeBook(book){
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    displayBooks();
}

function readBook(book){
    let index = myLibrary.indexOf(book);
    myLibrary[index].wasRead();
    displayBooks();
}

function unreadBook(book){
    let index = myLibrary.indexOf(book);
    myLibrary[index].notRead();
    displayBooks();
}

function displayBooks(){
    bookList.innerHTML = "";
    for (let x = 0; x < myLibrary.length; x++){
        const eachBook = myLibrary[x];
        const content = document.createElement('li');
        content.textContent = eachBook.info();

        const button = document.createElement('button');
        button.innerHTML = "Remove";
        button.addEventListener('click', () => {
            removeBook(eachBook);
        });

        const readBtn = document.createElement('button');
        readBtn.innerHTML = eachBook.readVal() ? "Unread" : "Read";
        readBtn.addEventListener('click', () => {
            if (eachBook.readVal() == true){
                unreadBook(eachBook);
            }
            else {
                readBook(eachBook);
            }
        });

        content.appendChild(button);
        content.appendChild(readBtn);
        bookList.appendChild(content);
    }
}

const bookName = document.getElementById('bookname');
const bookAuthor = document.getElementById('bookauthor');
const readOrNot = document.getElementById('chbx');
const bookLength = document.getElementById('booklength');

const btn = document.querySelector('#submit-btn');
btn.addEventListener("click", btnClick, false);

function btnClick(event) {
    if (bookName.checkValidity() && bookAuthor.checkValidity() && readOrNot.checkVisibility() && bookLength.checkValidity()){
        let name = bookName.value;
        let bookAuthorVal = bookAuthor.value;
        let readBool = readOrNot.value;
        let bookLengthVal = bookLength.value;
        const newBook = Book(name, bookAuthorVal, bookLengthVal, readBool);
        addBookToLibrary(newBook);
        displayBooks();
        bookName.value = "";
        bookAuthor.value = "";
        readOrNot.value = false;
        bookLength.value = "";
    }
    event.preventDefault();
}

displayBooks();
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//books in the library
//In this list we only preserve the information of each book.
const books = new Map();


const createBook = (title,author,isbn) => {

    //search book
    const existingBook = books.has(isbn)

    //if already exists => return that instance
    if(existingBook){
        return books.get(isbn)
    }

    //otherwise we'll create a new one
    const book = new Book(title,author,isbn);
    books.set(isbn,book)

    return book;
}


//Obviously now we have an issue:
//Since we're only saving an instance of each book,
//We cannot track/manage multiple copies of the same book
//As a result, we're going to create a class/list to track them


const bookList = [];

const addBook = (title,author,isbn,availability,sales) => {

    const book = {
        //pretty much we extend this book object with the original data
        ...createBook(title,author,isbn),
        availability,
        sales
    }

    bookList.push(book);
    return book
}

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

/**
 * Now In bookList we have the actual library (multiples books with same title/isbn etc)
 * In Books we only have one instance of each book with its information
 */
console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", books.size);

console.log(bookList)
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setBooks] = useState(() => {
        const results = localStorage.getItem("books");
        return results ? JSON.parse(results) : [];
    });

    useEffect(() => {
        const results = localStorage.getItem("books");
        if (results) {
            setBooks(JSON.parse(results));
        } else {
            setBooks([]);
        }
    }, []);

    function removeBook(bookId) {
        const updatedBooks = books.filter((book) => book.id !== bookId);
        localStorage.setItem("books", JSON.stringify(updatedBooks));

        setBooks(updatedBooks);
    }

    function addBook(book) {
        const updatedBooks = [...books, book];
        localStorage.setItem("books", JSON.stringify(updatedBooks));

        setBooks(updatedBooks);
    }

    return (
        <BooksContext.Provider value={{ addBook, removeBook, books }}>
            {children}
        </BooksContext.Provider>
    );
};

const useBooks = () => {
    const books = useContext(BooksContext);

    if (books === undefined) {
        throw new Error("BooksProvider was used outside of its context");
    }

    return { ...books };
};

export { useBooks, BookProvider };

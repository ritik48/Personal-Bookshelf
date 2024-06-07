/* eslint-disable react/prop-types */

import { useBooks } from "../booksContext";

function BookCard({ index, title, edition_count, bookId }) {
    const { addBook, removeBook, books } = useBooks();

    function handleAddBook(title, edition, id) {
        const newBook = { title, edition, id };
        addBook(newBook);
    }
    const isInBookShelf = books.find((book) => book.id === bookId);
    const path = location.pathname;

    return (
        <div
            key={index}
            className={`text-black ${
                isInBookShelf && !path.includes("bookshelf")
                    ? "bg-gray-200 border-gray-400"
                    : "bg-gray-100"
            } shadow-md border p-4 rounded-2xl flex flex-col gap-3`}
        >
            <div className=" border-[#aaaaaa]">
                <span className="font-semibold">Book title:</span> {title}
            </div>
            <div className=" border-[#aaaaaa]">
                <span className="font-semibold">Edition count:</span>{" "}
                {edition_count || "NA"}
            </div>
            {isInBookShelf ? (
                <button
                    onClick={() => removeBook(bookId)}
                    className="border mt-4 font-medium hover:bg-green-600 hover:text-green-100 duration-300 transition-all text-sm rounded-xl px-2 py-2 w-fit  border-green-500"
                >
                    Remove
                </button>
            ) : (
                <button
                    onClick={() => handleAddBook(title, edition_count, bookId)}
                    className="border mt-4 font-medium hover:bg-green-600 hover:text-green-100 duration-300 transition-all text-sm rounded-xl px-2 py-2 w-fit  border-green-500"
                >
                    Add to Bookshelf
                </button>
            )}
        </div>
    );
}

export { BookCard };

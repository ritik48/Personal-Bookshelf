/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useBooks } from "../booksContext";
import { BookCard } from "../components/BookCard";

function Bookshelf() {
    const { books } = useBooks();

    return (
        <div className="mt-5">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="flex gap-3 items-center">
                    <h1 className="text-lg font-semibold">My Bookshelf</h1>
                    {books.length > 0 && (
                        <span className="text-sm">
                            (You have : {books.length} books)
                        </span>
                    )}
                </div>
                {books.length === 0 ? (
                    <div className="flex flex-col items-center mt-10 gap-5">
                        <h1 className="text-xl text-center">
                            You don't have any books in your shelf.
                        </h1>
                        <Link
                            to={"/"}
                            className="border text-black font-medium border-green-500 hover:bg-green-600 hover:text-green-100 duration-300 transition-all text-sm rounded-md px-2 py-2 w-fit"
                        >
                            Get books here
                        </Link>
                    </div>
                ) : (
                    <div className="grid mt-3 text-black md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3 sm:px-0 gap-3">
                        {books.length > 0 && (
                            <>
                                {books?.map((book, index) => (
                                    <BookCard
                                        key={index}
                                        index={index}
                                        title={book.title}
                                        edition_count={book.edition}
                                        bookId={book.id}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export { Bookshelf };

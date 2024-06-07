/* eslint-disable react/prop-types */

import { BookCard } from "./BookCard";

export function BookTable({ books, bookFetching, search, bookError }) {
    return (
        <div className="mt-4 min-h-[400px]">
            {bookFetching && (
                <>
                    <div className="text-3xl text-center mt-10">Loading...</div>
                    {search.length > 0 && bookError && (
                        <div className="text-2xl text-red-500 text-center mt-10">
                            Something went wrong while getting your books
                        </div>
                    )}
                </>
            )}

            {!bookFetching && search.length === 0 && (
                <div className="text-3xl text-center my-8 font-semibold">
                    Search something.
                </div>
            )}
            <div className="grid text-black md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3 gap-3">
                {!bookFetching && search.length > 0 && (
                    <>
                        {books?.map((book, index) => (
                            <BookCard
                                key={index}
                                index={index}
                                title={book.title}
                                edition_count={book.edition_count}
                                bookId={book.key}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

/* eslint-disable react/prop-types */

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
                            <div
                                key={index}
                                className="text-black bg-gray-100 shadow-md border p-4 rounded-2xl flex flex-col gap-3"
                            >
                                <div className=" border-[#aaaaaa]">
                                    <span className="font-semibold">
                                        Book title:
                                    </span>{" "}
                                    {book.title}
                                </div>
                                <div className=" border-[#aaaaaa]">
                                    <span className="font-semibold">
                                        Edition count:
                                    </span>{" "}
                                    {book.edition_count || "NA"}
                                </div>
                                <button className="border mt-4 font-medium hover:bg-green-600 hover:text-green-100 duration-300 transition-all text-sm rounded-xl px-2 py-2 w-fit  border-green-500">
                                    Add to Bookshelf
                                </button>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

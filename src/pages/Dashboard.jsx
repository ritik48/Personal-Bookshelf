import { useGetBooksQuery } from "../redux/api";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { BookTable } from "../components/BookTable";
import Pagination from "../components/Pagination";

function Dashboard() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("lord of the rings");
    const debouncedSearch = useDebounce(search);

    const limit = 10;
    const offset = (page - 1) * limit;
    const [totalPage, setTotalPage] = useState(0);

    const {
        data: booksData,
        error: bookError,
        isFetching: bookFetching,
    } = useGetBooksQuery(
        { limit, offset, search: debouncedSearch },
        { skip: !debouncedSearch }
    );

    useEffect(() => {
        if (bookFetching) return;

        setTotalPage(Math.ceil(booksData.numFound / limit));
    }, [bookFetching, limit, booksData]);

    const books = booksData?.docs;
    console.log(booksData);

    // if (bookFetching) return null;

    return (
        <div className="mt-5">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl px-3 font-semibold">Search Books</h1>
                <div className="flex justify-between px-3 flex-wrap items-center mt-5">
                    <div className="flex items-center gap-2">
                        <input
                            value={search}
                            onChange={(e) => {
                                setPage(1);
                                setSearch(e.target.value);
                            }}
                            className="text-sm sm:text-lg outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300 border px-4 py-2 rounded-md"
                            placeholder="Search book"
                        />
                    </div>
                    <div className="font-medium bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg transition-all duration-300 block p-2.5">
                        10 per page
                    </div>
                </div>
                <BookTable
                    books={books}
                    bookError={bookError}
                    bookFetching={bookFetching}
                    search={search}
                />

                <div className="shadow-md border border-[#858585] bg-white sticky bottom-0 rounded-md px-4 py-3 flex items-center justify-between">
                    {booksData?.numFound === 0 && search.length > 0 && (
                        <div>No results found</div>
                    )}
                    <Pagination
                        bookFetching={bookFetching}
                        booksData={booksData}
                        page={page}
                        totalPage={totalPage}
                        offset={offset}
                        search={search}
                        setPage={setPage}
                        limit={limit}
                    />
                </div>
            </div>
        </div>
    );
}

export { Dashboard };

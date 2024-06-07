/* eslint-disable react/prop-types */
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function Pagination({
    booksData,
    search,
    offset,
    page,
    totalPage,
    setPage,
    bookFetching,
    limit,
}) {

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {booksData?.numFound > 0 && search.length > 0 && (
                    <div className="text-sm flex flex-wrap">
                        <div>Showing: </div>
                        <div>
                            <span className="font-semibold">
                                {Math.min(offset + 1, booksData.numFound)}
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold">
                                {Math.min(limit * page, booksData.numFound)}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold">
                                {booksData.numFound}
                            </span>{" "}
                            results
                        </div>
                    </div>
                )}
                {booksData?.numFound > 0 && search.length > 0 && (
                    <div className="sm:ml-auto sm:mr-4 text-sm">
                        Page: <span className="font-semibold">{page}</span> of{" "}
                        <span className="font-semibold">{totalPage}</span>
                    </div>
                )}
            </div>
            {booksData?.numFound > 0 && search.length > 0 && (
                <div className="flex items-center">
                    <button
                        onClick={() => {
                            if (page === 1) return;
                            setPage(page - 1);
                        }}
                        disabled={bookFetching || page === 1}
                        className="border-[#a6a5a5] flex justify-center items-center gap-2 text-stone-100 bg-stone-900 rounded-tr-none rounded-br-none duration-300 transition-all hover:bg-stone-700 hover:text-white border px-3 py-2 rounded-md"
                    >
                        <IoMdArrowBack size={20} />{" "}
                        <span className="hidden sm:block">Previous</span>
                    </button>
                    <button
                        disabled={bookFetching || page === totalPage}
                        onClick={() => {
                            if (page === totalPage) return;
                            setPage(page + 1);
                        }}
                        className="border-[#a6a5a5] gap-2 flex justify-center items-center text-stone-100 bg-stone-900 border-l-0 rounded-tl-none rounded-bl-none duration-300 transition-all hover:bg-stone-700 hover:text-white border px-3 py-2 rounded-md"
                    >
                        <span className="hidden sm:block">Next</span>
                        <IoMdArrowForward size={20} />
                    </button>
                </div>
            )}
        </>
    );
}

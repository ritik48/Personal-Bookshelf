import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="border border-[#cccbcb]">
            <div className="flex py-3 px-3 mx-auto max-w-6xl justify-between items-center">
                <Link to={"/"} className="text-sm font-semibold">
                    marquee
                </Link>
                <Link
                    to={"/bookshelf"}
                    className="border font-medium text-green-50 bg-green-500 hover:bg-green-600 hover:text-green-100 duration-300 transition-all text-sm rounded-md px-2 py-2 w-fit  border-green-500"
                >
                    My Bookshelf
                </Link>
            </div>
        </nav>
    );
}

export { Navbar };

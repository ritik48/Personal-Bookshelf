import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { Bookshelf } from "./pages/MyBookshelf";
import { BookProvider } from "./booksContext";

function App() {
    return (
        <BookProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/bookshelf" element={<Bookshelf />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </BookProvider>
    );
}

export default App;

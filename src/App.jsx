import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Dashboard } from "./pages/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

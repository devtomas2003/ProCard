import { BrowserRouter, Routes, Route } from "react-router-dom";

import Default from './style';
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";

export default function Router(){
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
                <Default />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
}
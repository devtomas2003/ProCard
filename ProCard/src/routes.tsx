import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Views/Login";

import Default from './style';

export default function Router(){
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
                <Default />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
}
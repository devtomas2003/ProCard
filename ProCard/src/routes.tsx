import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRefeitorio from "./Views/Refeitorio/Login";

import Default from './style';
import MenuRefeitorio from "./Views/Refeitorio/Menu";
import ServiceRefeitorio from "./Views/Refeitorio/Service";

export default function Router(){
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
                <Default />
                <Routes>
                    <Route path="/refeitorio" element={<LoginRefeitorio />} />
                    <Route path="/refeitorio/menu" element={<MenuRefeitorio />} />
                    <Route path="/refeitorio/servico" element={<ServiceRefeitorio />} />
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
}
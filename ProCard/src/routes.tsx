import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRefeitorio from "./Views/Refeitorio/Login";

import Default from './style';
import MenuRefeitorio from "./Views/Refeitorio/Menu";
import ServiceRefeitorio from "./Views/Refeitorio/Service";
import ViewRefeitorio from "./Views/Refeitorio/View";
import ConfigurationsRefeitorio from "./Views/Refeitorio/Configurations";
import LoginKiosk from "./Views/Kiosk/Login";
import MenuKiosk from "./Views/Kiosk/Menu";

export default function Router(){
    return (
        <BrowserRouter>
            {/* <AuthProvider> */}
                <Default />
                <Routes>
                    <Route path="/refeitorio" element={<LoginRefeitorio />} />
                    <Route path="/refeitorio/menu" element={<MenuRefeitorio />} />
                    <Route path="/refeitorio/servico" element={<ServiceRefeitorio />} />
                    <Route path="/refeitorio/view" element={<ViewRefeitorio />} />
                    <Route path="/refeitorio/config" element={<ConfigurationsRefeitorio />} />
                    <Route path="/kiosk" element={<LoginKiosk />} />
                    <Route path="/kiosk/menu" element={<MenuKiosk />} />
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
}
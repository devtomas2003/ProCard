import { BrowserRouter, Routes, Route } from "react-router-dom";

import Default from './style';
import LoginRefeitorio from "./Views/Refeitorio/Login";
import MenuRefeitorio from "./Views/Refeitorio/Menu";
import ServiceRefeitorio from "./Views/Refeitorio/Service";
import ViewRefeitorio from "./Views/Refeitorio/View";
import ConfigurationsRefeitorio from "./Views/Refeitorio/Configurations";
import LoginKiosk from "./Views/Kiosk/Login";
import MenuKiosk from "./Views/Kiosk/Menu";
import RequestsKiosk from "./Views/Kiosk/Requests";
import TransactionsKiosk from "./Views/Kiosk/Transactions";
import ConfigurationsKiosk from "./Views/Kiosk/Configurations";
import LoginPOS from "./Views/POS/Login";
import DashboardPOS from "./Views/POS/Dashboard";
import LoginMultiusos from "./Views/Multiusos/Login";
import DashboardMultiusos from "./Views/Multiusos/Dashboard";
import LoginGestor from "./Views/Gestor/Login";
import DashboardGestor from "./Views/Gestor/Dashboard";

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
                    <Route path="/kiosk/requests" element={<RequestsKiosk />} />
                    <Route path="/kiosk/transactions" element={<TransactionsKiosk />} />
                    <Route path="/kiosk/config" element={<ConfigurationsKiosk />} />
                    <Route path="/pos" element={<LoginPOS />} />
                    <Route path="/pos/dashboard" element={<DashboardPOS />} />
                    <Route path="/multiusos" element={<LoginMultiusos />} />
                    <Route path="/multiusos/dashboard" element={<DashboardMultiusos />} />
                    <Route path="/gestor" element={<LoginGestor />} />
                    <Route path="/gestor/dashboard" element={<DashboardGestor />} />
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
}
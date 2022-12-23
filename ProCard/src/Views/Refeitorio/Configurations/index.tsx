import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    BoxBackZone,
    BtnBack,
    Container,
    MainContainer,
    TxtActualService,
    ConfigChecks,
    LineCheck,
    CkeckInpt,
    LblText,
    TableRefeitorios,
    TRRef,
    TDRef,
    TabHead,
    TabBody,
    BoxSelect
} from "./style";

import { IoArrowBackCircleOutline } from "react-icons/io5";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ConfsProps } from "../../../Types/Refeitorio";

export default function Configurations(){
    
    const navigate = useNavigate();
    const [onlyAuth, setOnlyAuth] = useState(JSON.parse(localStorage.getItem("confs") || "{}").onlyAuth);
    const [sellWT, setSellWT] = useState(JSON.parse(localStorage.getItem("confs") || "{}").sellWT);
    const [enadesService, setEnadesService] = useState(JSON.parse(localStorage.getItem("confs") || "{}").enadesService);
    const [subEscal, setSubEscal] = useState(JSON.parse(localStorage.getItem("confs") || "{}").subEscal);
    const [serviceCard, setServiceCard] = useState(JSON.parse(localStorage.getItem("confs") || "{}").serviceCard);
    const [doorNeed, setDoorNeed] = useState(JSON.parse(localStorage.getItem("confs") || "{}").doorNeed);

    function updateConfig(name: string){
        switch(name){
            case "onlyAuth":
                setOnlyAuth(!onlyAuth);
                localStorage.setItem("confs", JSON.stringify(changeProp("onlyAuth")));
                break;
            case "sellWT":
                setSellWT(!sellWT);
                localStorage.setItem("confs", JSON.stringify(changeProp("sellWT")));
                break;
            case "enadesService":
                setEnadesService(!enadesService);
                localStorage.setItem("confs", JSON.stringify(changeProp("enadesService")));
                break;
            case "subEscal":
                setSubEscal(!subEscal);
                localStorage.setItem("confs", JSON.stringify(changeProp("subEscal")));
                break;
            case "serviceCard":
                setServiceCard(!serviceCard);
                localStorage.setItem("confs", JSON.stringify(changeProp("serviceCard")));
                break;
            case "doorNeed":
                setDoorNeed(!doorNeed);
                localStorage.setItem("confs", JSON.stringify(changeProp("doorNeed")));
                break;
        }
    }

    function changeProp(propName: string){
        let lastConfs = JSON.parse(localStorage.getItem("confs") || "{}");
        lastConfs[propName  as keyof ConfsProps] = !lastConfs[propName as keyof ConfsProps];
        return lastConfs;
    }

    return (
        <Container>
            <Header />
                <MainContainer>
                    <BoxBackZone>
                        <BtnBack onClick={() => { navigate('/refeitorio/menu') }}>
                            <IoArrowBackCircleOutline size={50} color="#444" />
                        </BtnBack>
                        <TxtActualService>Configurações</TxtActualService>
                    </BoxBackZone>
                    <ConfigChecks>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="onlyAuth" checked={onlyAuth} onChange={() => { updateConfig("onlyAuth"); }} />
                            <LblText htmlFor="onlyAuth">Permitir venda de refeições sem ser necessário um utilizador autorizado.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="sellWT" checked={sellWT} onChange={() => { updateConfig("sellWT"); }} />
                            <LblText htmlFor="sellWT">Permitir venda de refeições sem taxa.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="enadesService" checked={enadesService} onChange={() => { updateConfig("enadesService"); }} />
                            <LblText htmlFor="enadesService">Permitir a ativação/desativação do serviço.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="subEscal" checked={subEscal} onChange={() => { updateConfig("subEscal"); }} />
                            <LblText htmlFor="subEscal">Mostrar escalão de subsídio.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="serviceCard" checked={serviceCard} onChange={() => { updateConfig("serviceCard"); }} />
                            <LblText htmlFor="serviceCard">Permitir o serviço através do nº de cartão.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="doorNeed" checked={doorNeed} onChange={() => { updateConfig("doorNeed"); }} />
                            <LblText htmlFor="doorNeed">Condicionar cartões sem o registo de entrada na portária.</LblText>
                        </LineCheck>
                    </ConfigChecks>
                    <TableRefeitorios cellPadding={0} cellSpacing={0}>
                        <TabHead>
                            <TRRef>
                                <TDRef>&nbsp;</TDRef>
                                <TDRef>Refeitórios</TDRef>
                            </TRRef>
                        </TabHead>
                        <TabBody>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Refeitório - Escola Secundária de Tondela</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Refeitório - Escola Secundária de Tondela</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Refeitório - Escola Secundária de Tondela</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Refeitório - Escola Secundária de Tondela</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Refeitório - Escola Secundária de Tondela</TDRef>
                            </TRRef>
                        </TabBody>
                    </TableRefeitorios>
                </MainContainer>
            <Footer />
        </Container>
    );
}
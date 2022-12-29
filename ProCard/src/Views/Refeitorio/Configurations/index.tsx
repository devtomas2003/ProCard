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
    BoxSelect,
    BtnConfirm,
    ConfirmTxt
} from "./style";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Configurations(){
    
    const navigate = useNavigate();
    const [onlyAuth, setOnlyAuth] = useState<boolean>(JSON.parse(localStorage.getItem("confs-refeitorio") || "{}").onlyAuth);
    const [sellWT, setSellWT] = useState<boolean>(JSON.parse(localStorage.getItem("confs-refeitorio") || "{}").sellWT);
    const [enadesService, setEnadesService] = useState<boolean>(JSON.parse(localStorage.getItem("confs") || "{}").enadesService);
    const [subEscal, setSubEscal] = useState<boolean>(JSON.parse(localStorage.getItem("confs-refeitorio") || "{}").subEscal);
    const [serviceCard, setServiceCard] = useState<boolean>(JSON.parse(localStorage.getItem("confs-refeitorio") || "{}").serviceCard);
    const [doorNeed, setDoorNeed] = useState<boolean>(JSON.parse(localStorage.getItem("confs-refeitorio") || "{}").doorNeed);

    function updateConfig(){
        const atualConfig = {
            onlyAuth,
            sellWT,
            enadesService,
            subEscal,
            serviceCard,
            doorNeed
        };
        localStorage.setItem("confs-refeitorio", JSON.stringify(atualConfig));
        alert("Alterações gravadas com sucesso!");
    }

    return (
        <Container>
            <Header />
                <MainContainer method="post" onSubmit={(e) => { e.preventDefault(); updateConfig(); }}>
                    <BoxBackZone>
                        <BtnBack onClick={() => { navigate('/refeitorio/menu') }}>
                            <IoArrowBackCircleOutline size={50} color="#444" />
                        </BtnBack>
                        <TxtActualService>Configurações</TxtActualService>
                    </BoxBackZone>
                    <ConfigChecks>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="onlyAuth" checked={onlyAuth} onChange={(e) => { setOnlyAuth(e.target.checked); }} />
                            <LblText htmlFor="onlyAuth">Permitir venda de refeições sem ser necessário um utilizador autorizado.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="sellWT" checked={sellWT} onChange={(e) => { setSellWT(e.target.checked); }} />
                            <LblText htmlFor="sellWT">Permitir venda de refeições sem taxa.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="enadesService" checked={enadesService} onChange={(e) => { setEnadesService(e.target.checked); }} />
                            <LblText htmlFor="enadesService">Permitir a ativação/desativação do serviço.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="subEscal" checked={subEscal} onChange={(e) => { setSubEscal(e.target.checked); }} />
                            <LblText htmlFor="subEscal">Mostrar escalão de subsídio.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="serviceCard" checked={serviceCard} onChange={(e) => { setServiceCard(e.target.checked); }} />
                            <LblText htmlFor="serviceCard">Permitir o serviço através do nº de cartão.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="doorNeed" checked={doorNeed} onChange={(e) => { console.log(e); setDoorNeed(e.target.checked); }} />
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
                    <BtnConfirm type="submit">
                        <AiFillCheckCircle size={23} color="#2b9d4a" />
                        <ConfirmTxt>Gravar</ConfirmTxt>
                    </BtnConfirm>
                </MainContainer>
            <Footer />
        </Container>
    );
}
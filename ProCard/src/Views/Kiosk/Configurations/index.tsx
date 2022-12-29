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
    TableKiosk,
    TRRef,
    TDRef,
    TabHead,
    TabBody,
    BoxSelect,
    TxtOption,
    InptTitle,
    InpConf,
    BtnConfirm,
    ConfirmTxt
} from "./style";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Configurations(){
    
    const navigate = useNavigate();
    const [doorNeed, setDoorNeed] = useState<boolean>(JSON.parse(localStorage.getItem("confs-kiosk") || "{}").doorNeed);
    const [manualAuth, setManualAuth] = useState<boolean>(JSON.parse(localStorage.getItem("confs-kiosk") || "{}").manualAuth);

    function updateConfig(){
        const atualConfig = {
            doorNeed,
            manualAuth
        };
        localStorage.setItem("confs-kiosk", JSON.stringify(atualConfig));
        alert("Alterações gravadas com sucesso!");
    }

    return (
        <Container>
            <Header />
                <MainContainer method="post" onSubmit={(e) => { e.preventDefault(); updateConfig(); }}>
                    <BoxBackZone>
                        <BtnBack onClick={() => { navigate('/kiosk/menu') }}>
                            <IoArrowBackCircleOutline size={50} color="#444" />
                        </BtnBack>
                        <TxtActualService>Configurações</TxtActualService>
                    </BoxBackZone>
                    <TxtOption>Configurações gerais</TxtOption>
                    <ConfigChecks>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="manualAuth" checked={manualAuth} onChange={(e) => { setManualAuth(e.target.checked); }} />
                            <LblText htmlFor="manualAuth">Condicionar cartões sem o registo de entrada na portária.</LblText>
                        </LineCheck>
                        <LineCheck>
                            <CkeckInpt type="checkbox" id="doorNeed" checked={doorNeed} onChange={(e) => { setDoorNeed(e.target.checked); }} />
                            <LblText htmlFor="doorNeed">Permitir autenticação manual.</LblText>
                        </LineCheck>
                    </ConfigChecks>
                    <TxtOption>Portária</TxtOption>
                    <TableKiosk cellPadding={0} cellSpacing={0}>
                        <TabHead>
                            <TRRef>
                                <TDRef>&nbsp;</TDRef>
                                <TDRef>Tipo de utilizador permitido</TDRef>
                            </TRRef>
                        </TabHead>
                        <TabBody>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Alunos</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Pessoal docente</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Pessoal não docente</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Outros</TDRef>
                            </TRRef>
                        </TabBody>
                    </TableKiosk>
                    <TableKiosk cellPadding={0} cellSpacing={0}>
                        <TabHead>
                            <TRRef>
                                <TDRef>&nbsp;</TDRef>
                                <TDRef>Tipo de registo permitido</TDRef>
                            </TRRef>
                        </TabHead>
                        <TabBody>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Entrada</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Saida</TDRef>
                            </TRRef>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="checkbox" /></BoxSelect></TDRef>
                                <TDRef>Registo</TDRef>
                            </TRRef>
                        </TabBody>
                    </TableKiosk>
                    <InptTitle>Código do acesso</InptTitle>
                    <InpConf type="text" autoComplete="off" autoCapitalize="off" autoCorrect="off" />
                    <TxtOption>Refeitório</TxtOption>
                    <TableKiosk cellPadding={0} cellSpacing={0}>
                        <TabHead>
                            <TRRef>
                                <TDRef>&nbsp;</TDRef>
                                <TDRef>Setor de venda</TDRef>
                            </TRRef>
                        </TabHead>
                        <TabBody>
                            <TRRef>
                                <TDRef><BoxSelect><CkeckInpt type="radio" name="setorVenda" /></BoxSelect></TDRef>
                                <TDRef>Venda Refeitório</TDRef>
                            </TRRef>
                        </TabBody>
                    </TableKiosk>
                    <BtnConfirm type="submit">
                        <AiFillCheckCircle size={23} color="#2b9d4a" />
                        <ConfirmTxt>Gravar</ConfirmTxt>
                    </BtnConfirm>
                </MainContainer>
            <Footer />
        </Container>
    );
}
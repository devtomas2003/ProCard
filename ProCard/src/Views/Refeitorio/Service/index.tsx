import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Container,
    MainContainer,
    LineRequestChecks,
    UserCheck,
    StatusService,
    UserPic,
    TimeLog,
    LineUserData,
    UserMeta,
    UserMetaExternal,
    BtnsActions,
    BtnAction,
    BtnText,
    ShadowBg,
    BoxTaxUser,
    HeaderTop,
    LogoAppModal,
    TxtModal,
    BodyModal,
    BoxMetawindow,
    BoxClose,
    UserData,
    LblName,
    ListTypeRefs,
    RefTypeBtn,
    RefTypeTxt,
    TextConfirm,
    CheckTax,
    InptChk,
    TxtTax,
    BtnConfirm,
    ConfirmTxt,
    TotalPrice,
    PriceBold,
    ManualUserEntry,
    InputUserCard,
    TxtCardLbl,
    MealsData,
    MealBox,
    MealBoxTitle,
    TxtMealBox,
    BtnBack
} from "./style";

import { AiFillCloseSquare, AiFillCheckCircle } from "react-icons/ai";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ConfsProps } from "../../../Types/Refeitorio";

export default function Service(){

    const navigate = useNavigate();

    const [activeTaxMeal, setActiveTextMeal] = useState('cf3a2aaa-56f5-445e-bd7c-7da6d4d64910');
    const [modal, setModal] = useState('');
    const [sellWithTax, setSellWithTax] = useState(true);

    function checkPermsApp(name: string): boolean{
        const perms = JSON.parse(localStorage.getItem("confs-refeitorio") || "{}");
        return perms[name as keyof ConfsProps];
    }

    return (
        <Container>
            { modal !== "" ?
            <ShadowBg>
                { modal === "allowTaxUser" ?
                <BoxTaxUser>
                    <HeaderTop>
                        <BoxMetawindow>
                            <LogoAppModal src="/refeitorio.svg" title="Refeitório" alt="Refeitório" />
                            <TxtModal>Autorizar</TxtModal>
                        </BoxMetawindow>
                        <BoxClose onClick={() => { setModal(''); }}>
                            <AiFillCloseSquare size={20} color="#bd4c4c" />
                        </BoxClose>
                    </HeaderTop>
                    <BodyModal method="post">
                        <UserData>Nº de Cartão: <LblName>a16802</LblName></UserData>
                        <UserData>Nome: <LblName>João Alberto dos Santos</LblName></UserData>
                        <UserData>Escola/Turma: <LblName>Escola Secundária de Teste (12ºC)</LblName></UserData>
                        <ListTypeRefs>
                            <RefTypeBtn isActive={activeTaxMeal === "cf3a2aaa-56f5-445e-bd7c-7da6d4d64910"} onClick={() => { setActiveTextMeal("cf3a2aaa-56f5-445e-bd7c-7da6d4d64910"); }}>
                                <RefTypeTxt>Normal</RefTypeTxt>
                            </RefTypeBtn>
                            <RefTypeBtn isActive={activeTaxMeal === "989ea6cf-c5a7-4b14-becc-654d4713fa31"} onClick={() => { setActiveTextMeal("989ea6cf-c5a7-4b14-becc-654d4713fa31"); }}>
                                <RefTypeTxt>Vegetariano</RefTypeTxt>
                            </RefTypeBtn>
                        </ListTypeRefs>
                        <CheckTax>
                            <InptChk type="checkbox" id="taxCheck" checked={sellWithTax} onChange={() => { setSellWithTax(!sellWithTax); }} disabled={!checkPermsApp("sellWT")} />
                            <TxtTax htmlFor="taxCheck">Vender refeição com taxa.</TxtTax>
                        </CheckTax>
                        <TotalPrice>Valor: <PriceBold>1,78 €</PriceBold></TotalPrice>
                        { checkPermsApp("onlyAuth") ?
                        <BtnConfirm type="submit">
                            <AiFillCheckCircle size={20} color="#2b9d4a" />
                            <ConfirmTxt>Confirmar</ConfirmTxt>
                        </BtnConfirm>
                        :
                        <TextConfirm>Para confirmar passe um cartão autorizado.</TextConfirm>
                        }
                    </BodyModal>
                </BoxTaxUser>
                : modal === "manualEntry" ?
                <ManualUserEntry>
                    <HeaderTop>
                        <BoxMetawindow>
                            <LogoAppModal src="/refeitorio.svg" title="Refeitório" alt="Refeitório" />
                            <TxtModal>Serviço por Nº de Cartão</TxtModal>
                        </BoxMetawindow>
                        <BoxClose onClick={() => { setModal(''); }}>
                            <AiFillCloseSquare size={20} color="#bd4c4c" />
                        </BoxClose>
                    </HeaderTop>
                    <BodyModal method="post">
                        <TxtCardLbl>Introduza o nº de cartão.</TxtCardLbl>
                        <InputUserCard type="text" required autoComplete="off" autoCapitalize="off" autoCorrect="off" />
                        <BtnConfirm type="submit">
                            <AiFillCheckCircle size={20} color="#2b9d4a" />
                            <ConfirmTxt>Confirmar</ConfirmTxt>
                        </BtnConfirm>
                    </BodyModal>
                </ManualUserEntry>
                : null }
            </ShadowBg> : null }
            <Header />
            <MainContainer>
                <BtnBack onClick={() => { navigate('/refeitorio/menu') }}>
                    <IoArrowBackCircleOutline size={50} color="#444" />
                </BtnBack>
                <LineRequestChecks>
                    <UserCheck notAllowed={false}>
                        <StatusService>Autorizado</StatusService>
                        <StatusService>Normal</StatusService>
                        <UserPic src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" title="Nome do Fulano" alt="Nome do Fulano" />
                        <TimeLog>22/12/2022 15:39:25</TimeLog>
                        <LineUserData>
                            <UserMeta>a16802</UserMeta>
                            <UserMeta>12ºC</UserMeta>
                        </LineUserData>
                        <UserMeta>Tomás Figueiredo</UserMeta>
                        <UserMetaExternal>&nbsp;</UserMetaExternal>
                    </UserCheck>
                    <UserCheck notAllowed={false}>
                        <StatusService>Autorizado</StatusService>
                        <StatusService>Vegetariano</StatusService>
                        <UserPic src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQY84K_keTZc9aJ24LXwEdd_3y8h1dQ1afwTOV7LggufyW3s_gjEwEcRugNks9MkQGk4&usqp=CAU" title="Nome do Fulano" alt="Nome do Fulano" />
                        <TimeLog>22/12/2022 15:39:25</TimeLog>
                        <LineUserData>
                            <UserMeta>a16802</UserMeta>
                            <UserMeta>12ºC</UserMeta>
                        </LineUserData>
                        <UserMeta>Tomás Figueiredo</UserMeta>
                        <UserMetaExternal>&nbsp;</UserMetaExternal>
                    </UserCheck>
                    <UserCheck notAllowed={true} onClick={() => { setModal('allowTaxUser'); }}>
                        <StatusService>Não autorizado</StatusService>
                        <StatusService>&nbsp;</StatusService>
                        <UserPic src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" title="Nome do Fulano" alt="Nome do Fulano" />
                        <TimeLog>22/12/2022 15:39:25</TimeLog>
                        <LineUserData>
                            <UserMeta>a16802</UserMeta>
                            <UserMeta>12ºC</UserMeta>
                        </LineUserData>
                        <UserMeta>Tomás Figueiredo</UserMeta>
                        <UserMetaExternal>&nbsp;</UserMetaExternal>
                    </UserCheck>
                    <UserCheck notAllowed={false}>
                        <StatusService>Autorizado</StatusService>
                        <StatusService>Normal</StatusService>
                        <UserPic src="https://www.osso.pt/wp-content/uploads/2013/03/765-default-avatar.png" title="Nome do Fulano" alt="Nome do Fulano" />
                        <TimeLog>22/12/2022 15:39:25</TimeLog>
                        <LineUserData>
                            <UserMeta>a16802</UserMeta>
                            <UserMeta>12ºC</UserMeta>
                        </LineUserData>
                        <UserMeta>Rui Santos</UserMeta>
                        <UserMetaExternal>Externo - AETCF</UserMetaExternal>
                    </UserCheck>
                </LineRequestChecks>
                <BtnsActions>
                    <BtnAction>
                        <BtnText>&#60; Anterior</BtnText>
                    </BtnAction>
                    <BtnAction>
                        <BtnText>Próximo &#62;</BtnText>
                    </BtnAction>
                    { checkPermsApp("serviceCard") ?
                    <BtnAction onClick={() => { setModal('manualEntry'); }}>
                        <BtnText>Nº de Cartão</BtnText>
                    </BtnAction> : null }
                </BtnsActions>
                <MealsData>
                    <MealBox>
                        <MealBoxTitle>Normal</MealBoxTitle>
                        <TxtMealBox>21/125</TxtMealBox>
                        <TxtMealBox>Faltam: 104</TxtMealBox>
                    </MealBox>
                    <MealBox>
                        <MealBoxTitle>Vegetariano</MealBoxTitle>
                        <TxtMealBox>21/125</TxtMealBox>
                        <TxtMealBox>Faltam: 104</TxtMealBox>
                    </MealBox>
                </MealsData>
            </MainContainer>
            <Footer />
        </Container>
    );
}
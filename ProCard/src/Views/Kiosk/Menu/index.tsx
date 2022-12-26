import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
    Container,
    MainContainer,
    BtnsAction,
    ActionBtn,
    TxtBtn,
    TxtMain,
    NameLogon,
    CenterContainer,
    BoxShadow,
    BoxRegister,
    IconStatus,
    TxtsZone,
    TxtStatus
} from "./style";

import { GiMeal, GiExitDoor } from "react-icons/gi";
import { SlBookOpen } from "react-icons/sl";
import { RiShutDownLine } from "react-icons/ri";
import { BsGearFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Menu(){

    const [alertAssiduity, setAlertAssiduity] = useState(false);
    const navigate = useNavigate();

    function processRegrats(){
        const nowTime = new Date().getHours();
        if(nowTime >= 12 && nowTime <= 20){
            return "Boa Tarde";
        }else if(nowTime <= 12 && nowTime >= 7){
            return "Bom Dia";
        }else{
            return "Boa Noite";
        }
    }

    const [regrats, setRegrats] = useState(processRegrats());

    useEffect(() => {
        setInterval(() => {
            setRegrats(processRegrats());
        }, 1000);
    }, []);

    return (
        <Container>
            { alertAssiduity ?
            <BoxShadow>
                <BoxRegister>
                    <IconStatus>
                        <AiFillCheckCircle size={80} color="#fff" />
                    </IconStatus>
                    <TxtsZone>
                        <TxtStatus>Registo de entrada gravado com sucesso!</TxtStatus>
                    </TxtsZone>
                </BoxRegister>
            </BoxShadow> : null }
            <Header />
            <MainContainer>
                <CenterContainer>
                    <TxtMain>{regrats}, <NameLogon>Tomás Figueiredo</NameLogon></TxtMain>
                    <BtnsAction>
                        <ActionBtn typeBtn={0} onClick={() => { navigate('/kiosk/requests'); }}>
                            <GiMeal size={80} color="#fff" />
                            <TxtBtn>Requisitar</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={1} onClick={() => { navigate('/kiosk/transactions'); }}>
                            <SlBookOpen size={80} color="#fff" />
                            <TxtBtn>Movimentos</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={5} onClick={() => { setAlertAssiduity(true); setTimeout(() => { setAlertAssiduity(false); }, 3000); }}>
                            <BiTimeFive size={80} color="#fff" />
                            <TxtBtn>Registrar Assiuidade</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={2}>
                            <GiExitDoor size={80} color="#fff" />
                            <TxtBtn>Terminar sessão</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={4} onClick={() => { navigate('/kiosk/config'); }}>
                            <BsGearFill size={80} color="#fff" />
                            <TxtBtn>Configurações</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={3} onClick={() => { window.postMessage({ type: "closemykiosk" }); }}>
                            <RiShutDownLine size={80} color="#fff" />
                            <TxtBtn>Sair</TxtBtn>
                        </ActionBtn>
                    </BtnsAction>
                </CenterContainer>
            </MainContainer>
            <Footer />
        </Container>
    );
}
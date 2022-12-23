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
    CenterContainer
} from "./style";

import { GiMeal, GiExitDoor } from "react-icons/gi";
import { SlBookOpen } from "react-icons/sl";
import { RiShutDownLine } from "react-icons/ri";
import { BsGearFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Menu(){

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
                        <ActionBtn typeBtn={5} onClick={() => { navigate('/kiosk/assiduity'); }}>
                            <BiTimeFive size={80} color="#fff" />
                            <TxtBtn>Assiuidade</TxtBtn>
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
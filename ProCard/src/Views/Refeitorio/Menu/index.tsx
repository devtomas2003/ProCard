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

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Menu(){

    const navigate = useNavigate();

    function processRegrats(){
        const nowTime = new Date().getHours();
        if(nowTime >= 12 && nowTime <= 20){
            return "Boa Tarde";
        }else if(nowTime >= 20 && nowTime <= 7){
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
                        <ActionBtn typeBtn={0} onClick={() => { navigate('/refeitorio/servico'); }}>
                            <GiMeal size={80} color="#fff" />
                            <TxtBtn>Serviço</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={1}>
                            <SlBookOpen size={80} color="#fff" />
                            <TxtBtn>Consultar</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={2}>
                            <GiExitDoor size={80} color="#fff" />
                            <TxtBtn>Terminar sessão</TxtBtn>
                        </ActionBtn>
                        <ActionBtn typeBtn={3}>
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
import { useEffect, useState } from "react";

import {
    Container,
    TopHeader,
    LeftLogos,
    ImgApp,
    TxtApp,
    TimeBox,
    BoxTime,
    LineTime,
    FooterApp,
    LogoProCard,
    ImgLogoPC,
    TxtLogo,
    TextProCard,
    LineCopyright,
    LinkProject,
    SchoolData,
    ImgSchool,
    SchoolName,
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

export default function Menu(){

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

    const [now, setNow] = useState(new Date());
    const [regrats, setRegrats] = useState(processRegrats());

    useEffect(() => {
        setInterval(() => {
            setRegrats(processRegrats());
            setNow(new Date());
        }, 1000);
    }, []);

    function processMonth(month: number){
        switch(month){
            case 0:
                return "janeiro";
            case 1:
                return "fevereiro";
            case 2:
                return "março";
            case 3:
                return "abril";
            case 4:
                return "maio";
            case 5:
                return "junho";
            case 6:
                return "julho";
            case 7:
                return "agosto";
            case 8:
                return "setembro";
            case 9:
                return "nutubro";
            case 10:
                return "novembro";
            case 11:
                return "dezembro";
            default:
                return "unknown month";
        }
    }

    function processWeekDays(weekDay: number){
        switch(weekDay){
            case 1:
                return "domingo";
            case 2:
                return "segunda-feira";
            case 3:
                return "terça-feira";
            case 4:
                return "quarta-feira";
            case 5:
                return "quinta-feira";
            case 6:
                return "sexta-feira";
            case 7:
                return "sábado";
            default:
                return "unknown day";
        }
    }

    return (
        <Container>
            <TopHeader>
                <LeftLogos>
                    <ImgApp src="/refeitorio.svg" title="Refeitório" alt="Refeitório" />
                    <TxtApp>Refeitório</TxtApp>
                </LeftLogos>
                <TimeBox>
                    <BoxTime>
                        <LineTime>{now.getDate()}</LineTime>
                        <LineTime>{processMonth(now.getMonth())}</LineTime>
                    </BoxTime>
                    <BoxTime>
                        <LineTime>{now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0")}</LineTime>
                        <LineTime>{processWeekDays(now.getDay())}</LineTime>
                    </BoxTime>
                </TimeBox>
            </TopHeader>
            <MainContainer>
                <CenterContainer>
                    <TxtMain>{regrats}, <NameLogon>Tomás Figueiredo</NameLogon></TxtMain>
                    <BtnsAction>
                        <ActionBtn typeBtn={0}>
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
            <FooterApp>
                <LogoProCard>
                    <ImgLogoPC src="/logo.svg" title="Pro Card" alt="Pro Card" />
                    <TextProCard>
                        <TxtLogo>ProCard</TxtLogo>
                        <LineCopyright>2022 - {new Date().getFullYear()} © <LinkProject href="https://github.com/devtomas2003/ProCard" target="_blank">ProCard</LinkProject>. <LinkProject href="https://github.com/devtomas2003/ProCard/blob/Development/LICENSE" target="_blank">MIT License</LinkProject></LineCopyright>
                    </TextProCard>
                </LogoProCard>
                <SchoolData>
                    <ImgSchool src="http://192.168.1.10:8080/assets/logo.png" title="Nome da escola" alt="Nome da Escola" />
                    <SchoolName>Agrupamento de Escolas de Tondela - Tomaz Ribeiro</SchoolName>
                </SchoolData>
            </FooterApp>
        </Container>
    );
}
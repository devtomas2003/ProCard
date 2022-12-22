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
    BtnText
} from "./style";

export default function Service(){

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
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
                        <LineTime>Almoço</LineTime>
                        <LineTime>11:30 - 14:30</LineTime>
                    </BoxTime>
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
                    <UserCheck notAllowed={true}>
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
                        <UserMeta>Tomás Figueiredo</UserMeta>
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
                    <BtnAction>
                        <BtnText>Nº de Cartão</BtnText>
                    </BtnAction>
                </BtnsActions>
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
import { useEffect, useState } from "react";

import {
    TopHeader,
    LeftLogos,
    ImgApp,
    TxtApp,
    TimeBox,
    BoxTime,
    LineTime,
    UserMetadata,
    IMGUser,
    UserInfo,
    UserTxt
} from "./style";

export default function Header(){
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
        <TopHeader>
            <LeftLogos>
                <ImgApp src="/kiosk.svg" title="Kiosk" alt="Kiosk" />
                <TxtApp>Kiosk</TxtApp>
            </LeftLogos>
            <TimeBox>
                <UserMetadata>
                    <IMGUser src="https://www.osso.pt/wp-content/uploads/2013/03/765-default-avatar.png" title="Fulano de Tal" alt="Fulano de Tal" />
                    <UserInfo>
                        <UserTxt>Tomás Figueiredo</UserTxt>
                        <UserTxt>a16802</UserTxt>
                        <UserTxt>10,23 €</UserTxt>
                    </UserInfo>
                </UserMetadata>
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
    );
}
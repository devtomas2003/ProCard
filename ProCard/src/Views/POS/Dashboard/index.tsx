import { useState } from "react";

import {
    Container,
    BoxContainer,
    SideMenu,
    LogoZone,
    IMGApp,
    AppName,
    MenuZone,
    ULMain,
    LIMain,
    MainItem,
    TxtItemMain,
    ULSub,
    LISub,
    SubItem,
    TxtSubItem,
    TxtSubItemOnly,
    MenuMetadata,
    DropIcon,
    ContainerAtual,
    BigLogo,
    ImgBigLogo
} from "./style"

import Footer from "../Components/Footer";

import { FaCashRegister, FaHandHoldingUsd, FaHandshake, FaUserCircle } from "react-icons/fa";
import { BsCashCoin, BsPrinterFill, BsPaperclip, BsGearFill } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiSandwich, GiHotMeal, GiPayMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { IoIosDocument } from "react-icons/io";
import { AiFillCopy } from "react-icons/ai";

import ChargeCard from "../Components/ChargeCard";
import RefoundCard from "../Components/RefoundCard";

export default function Dashboard(){

    const [serviceContext, setServiceContext] = useState(0);

    return (
        <Container>
            <BoxContainer>
                <SideMenu>
                    <LogoZone>
                        <IMGApp src="/pos.svg" title="POS" alt="POS" />
                        <AppName>POS</AppName>
                    </LogoZone>
                    <MenuZone>
                        <ULMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <FaUserCircle size={20} color="#4B5563" />
                                        <TxtItemMain>Tomás Figueiredo</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub>
                                        <SubItem>
                                            <ImExit size={20} color="#4B5563" />
                                            <TxtSubItem>Terminar sessão</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <FaCashRegister size={20} color="#4B5563" />
                                        <TxtItemMain>Caixa</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <BsCashCoin size={20} color="#4B5563" />
                                            <TxtSubItem>Carregar cartão</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <FaHandHoldingUsd size={20} color="#4B5563" />
                                            <TxtSubItem>Devolução</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <FaHandshake size={20} color="#4B5563" />
                                            <TxtSubItem>Devolver cauções</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TbReportMoney size={20} color="#4B5563" />
                                            <TxtSubItem>Regularizar</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <BsPrinterFill size={20} color="#4B5563" />
                                            <TxtSubItem>Reimprimir</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <GiSandwich size={20} color="#4B5563" />
                                        <TxtItemMain>Bufete</TxtItemMain>
                                    </MenuMetadata>
                                </MainItem>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <BsPaperclip size={20} color="#4B5563" />
                                        <TxtItemMain>Papelaria</TxtItemMain>
                                    </MenuMetadata>
                                </MainItem>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <AiFillCopy size={20} color="#4B5563" />
                                        <TxtItemMain>Reprografia</TxtItemMain>
                                    </MenuMetadata>
                                </MainItem>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <GiPayMoney size={20} color="#4B5563" />
                                        <TxtItemMain>Cauções</TxtItemMain>
                                    </MenuMetadata>
                                </MainItem>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <IoIosDocument size={20} color="#4B5563" />
                                        <TxtItemMain>Serviços</TxtItemMain>
                                    </MenuMetadata>
                                </MainItem>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <GiHotMeal size={20} color="#4B5563" />
                                        <TxtItemMain>Refeições</TxtItemMain>
                                    </MenuMetadata>
                                </MainItem>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <BsGearFill size={20} color="#4B5563" />
                                        <TxtItemMain>Configurar</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Gerais</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Caixa</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Bufete</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Papelaria</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Reprografia</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Cauções</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Serviços</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Refeições</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                        </ULMain>
                    </MenuZone>
                </SideMenu>
                <ContainerAtual>
                { serviceContext === 0 ?
                <BigLogo>
                    <ImgBigLogo src="/pos.svg" title="POS" alt="POS" />
                </BigLogo>
                : serviceContext === 1 ? <ChargeCard /> : serviceContext === 2 ? <RefoundCard /> : null } 
                </ContainerAtual>
            </BoxContainer>
            <Footer />
        </Container>
    );
}
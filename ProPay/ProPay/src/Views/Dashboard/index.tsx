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

import Footer from "../../Components/Footer";

import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { BiBuildings, BiLockAlt } from "react-icons/bi";

export default function Dashboard(){

    const [serviceContext, setServiceContext] = useState(0);

    return (
        <Container>
            <BoxContainer>
                <SideMenu>
                    <LogoZone>
                        <IMGApp src="/propay.svg" title="ProPay" alt="ProPay" />
                        <AppName>ProPay</AppName>
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
                                        <FiUsers size={20} color="#4B5563" />
                                        <TxtItemMain>Ficheiros</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <FaUserAlt size={20} color="#4B5563" />
                                            <TxtSubItem>Utilizadores</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <BiBuildings size={20} color="#4B5563" />
                                            <TxtSubItem>Entidades</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <BiLockAlt size={20} color="#4B5563" />
                                            <TxtSubItem>Credenciais</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <BsGearFill size={20} color="#4B5563" />
                                        <TxtItemMain>Configurações</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <TbPlugConnected size={20} color="#4B5563" />
                                            <TxtSubItem>Comunicação AT</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                        </ULMain>
                    </MenuZone>
                </SideMenu>
                <ContainerAtual>
                    <BigLogo>
                        <ImgBigLogo src="/propay.svg" title="ProPay" alt="ProPay" />
                    </BigLogo>
                </ContainerAtual>
            </BoxContainer>
            <Footer />
        </Container>
    );
}
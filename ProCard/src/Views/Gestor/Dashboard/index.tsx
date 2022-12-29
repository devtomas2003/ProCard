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
    MenuMetadata,
    DropIcon,
    ContainerAtual,
    BigLogo,
    ImgBigLogo
} from "./style"

import Footer from "../Components/Footer";

import { FaUserCircle, FaServer, FaGlobeAmericas, FaUserShield, FaUserAlt, FaTasks, FaExchangeAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdApartment, MdEmail, MdGroups, MdUpdate, MdOutlineBackup, MdPhotoSizeSelectActual, MdOutlineIntegrationInstructions } from "react-icons/md";
import { TbBuildingWarehouse, TbPackgeImport } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { FiUsers, FiHelpCircle } from "react-icons/fi";
import { IoSchoolSharp, IoCalendar } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { BiLockAlt } from "react-icons/bi";
import { SiPurescript } from "react-icons/si";
import { BsGearFill, BsCalendarMonthFill } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";

export default function Dashboard(){

    const [serviceContext, setServiceContext] = useState(0);

    return (
        <Container>
            <BoxContainer>
                <SideMenu>
                    <LogoZone>
                        <IMGApp src="/gestor.svg" title="Gestor" alt="Gestor" />
                        <AppName>Gestor</AppName>
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
                                            <MdApartment size={20} color="#4B5563" />
                                            <TxtSubItem>Entidades</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <IoSchoolSharp size={20} color="#4B5563" />
                                            <TxtSubItem>Escolas</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TbBuildingWarehouse size={20} color="#4B5563" />
                                            <TxtSubItem>Armazéns</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <FaServer size={20} color="#4B5563" />
                                        <TxtItemMain>Servidor</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <MdEmail size={20} color="#4B5563" />
                                            <TxtSubItem>E-Mails</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <FaGlobeAmericas size={20} color="#4B5563" />
                                            <TxtSubItem>ProCard Online</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <RiComputerLine size={20} color="#4B5563" />
                                            <TxtSubItem>Terminais</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <FaTasks size={20} color="#4B5563" />
                                            <TxtSubItem>Tarefas</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <BiLockAlt size={20} color="#4B5563" />
                                        <TxtItemMain>Acessos</TxtItemMain>
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
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <MdGroups size={20} color="#4B5563" />
                                            <TxtSubItem>Grupos de Acesso</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <FaUserShield size={20} color="#4B5563" />
                                            <TxtSubItem>Gerar acessos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <FiHelpCircle size={20} color="#4B5563" />
                                        <TxtItemMain>Suporte</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <MdUpdate size={20} color="#4B5563" />
                                            <TxtSubItem>Atualizações</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <MdOutlineBackup size={20} color="#4B5563" />
                                            <TxtSubItem>Backups</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <AiFillApi size={20} color="#4B5563" />
                                            <TxtSubItem>ProPay API</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <SiPurescript size={20} color="#4B5563" />
                                            <TxtSubItem>Scripts</TxtSubItem>
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
                                            <IoCalendar size={20} color="#4B5563" />
                                            <TxtSubItem>Anos Económicos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <BsCalendarMonthFill size={20} color="#4B5563" />
                                            <TxtSubItem>Anos Letivos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <HiOutlineWrenchScrewdriver size={20} color="#4B5563" />
                                            <TxtSubItem>Gerais</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <TbPackgeImport size={20} color="#4B5563" />
                                        <TxtItemMain>Importações</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <MdPhotoSizeSelectActual size={20} color="#4B5563" />
                                            <TxtSubItem>Fotos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <HiUsers size={20} color="#4B5563" />
                                            <TxtSubItem>Utentes</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <MdOutlineIntegrationInstructions size={20} color="#4B5563" />
                                        <TxtItemMain>Integrações</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <FaExchangeAlt size={20} color="#4B5563" />
                                            <TxtSubItem>Web Hooks</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <CgPassword size={20} color="#4B5563" />
                                            <TxtSubItem>Credênciais</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                        </ULMain>
                    </MenuZone>
                </SideMenu>
                <ContainerAtual>
                    <BigLogo>
                        <ImgBigLogo src="/gestor.svg" title="Gestor" alt="Gestor" />
                    </BigLogo>
                </ContainerAtual>
            </BoxContainer>
            <Footer />
        </Container>
    );
}
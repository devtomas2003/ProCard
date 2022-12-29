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

import { FaUserEdit, FaUserCircle, FaUserAlt, FaTruckLoading, FaClipboardCheck, FaFish, FaRegCalendarTimes, FaAddressCard, FaFileInvoiceDollar } from "react-icons/fa";
import { BsCurrencyEuro, BsListUl, BsCalendarDate } from "react-icons/bs";
import { MdOutlineArrowDropDown, MdOutlineFormatListBulleted, MdOutlineRoomService, MdLocalBar, MdOutlineSetMeal, MdOutlinePivotTableChart } from "react-icons/md";
import { TbReceiptTax, TbBuildingWarehouse, TbFileTime, TbPackgeExport, TbReportAnalytics } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { IoGitNetworkSharp, IoHelpBuoySharp, IoDocumentLockOutline } from "react-icons/io5";
import { AiFillTag, AiOutlineUserAdd, AiOutlineSchedule, AiOutlineTable } from "react-icons/ai";
import { VscSymbolClass } from "react-icons/vsc";
import { HiWrench, HiDocumentCheck } from "react-icons/hi2";
import { RiFileEditFill, RiTimerFlashLine, RiFolderAddFill, RiListCheck2 } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { TiFolderDelete } from "react-icons/ti";

export default function Dashboard(){

    const [serviceContext, setServiceContext] = useState(0);

    return (
        <Container>
            <BoxContainer>
                <SideMenu>
                    <LogoZone>
                        <IMGApp src="/multiusos.svg" title="Multiusos" alt="Multiusos" />
                        <AppName>Multiusos</AppName>
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
                                            <TxtSubItem>Utentes</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <FaUserEdit size={20} color="#4B5563" />
                                            <TxtSubItem>Alteração Dados</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <AiFillTag size={20} color="#4B5563" />
                                            <TxtSubItem>Artigos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <IoGitNetworkSharp size={20} color="#4B5563" />
                                            <TxtSubItem>Famílias</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <FaTruckLoading size={20} color="#4B5563" />
                                            <TxtSubItem>Fornecedores</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TbReceiptTax size={20} color="#4B5563" />
                                            <TxtSubItem>Taxas de IVA</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TbBuildingWarehouse size={20} color="#4B5563" />
                                            <TxtSubItem>Armazéns</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <IoHelpBuoySharp size={20} color="#4B5563" />
                                            <TxtSubItem>Condições MAF</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <VscSymbolClass size={20} color="#4B5563" />
                                            <TxtSubItem>Turmas</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <IoHelpBuoySharp size={20} color="#4B5563" />
                                        <TxtItemMain>Apoios</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <BiTime size={20} color="#4B5563" />
                                            <TxtSubItem>Hórarios Suplmentos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <AiOutlineUserAdd size={20} color="#4B5563" />
                                            <TxtSubItem>Suplmentos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <FaClipboardCheck size={20} color="#4B5563" />
                                            <TxtSubItem>Subsídios</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <MdOutlineFormatListBulleted size={20} color="#4B5563" />
                                            <TxtSubItem>Consumos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <GiMeal size={20} color="#4B5563" />
                                        <TxtItemMain>Refeitório</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <HiWrench size={20} color="#4B5563" />
                                            <TxtSubItem>Configurar</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <BsCurrencyEuro size={20} color="#4B5563" />
                                            <TxtSubItem>Preços</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <MdLocalBar size={20} color="#4B5563" />
                                            <TxtSubItem>Refeitório Utentes</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <RiFileEditFill size={20} color="#4B5563" />
                                            <TxtSubItem>Tipo Refeições</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <RiTimerFlashLine size={20} color="#4B5563" />
                                            <TxtSubItem>Tempo Refeições</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <FaFish size={20} color="#4B5563" />
                                            <TxtSubItem>Componentes</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <BsListUl size={20} color="#4B5563" />
                                            <TxtSubItem>Ementas</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <MdOutlineRoomService size={20} color="#4B5563" />
                                            <TxtSubItem>Serviços</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <MdOutlineSetMeal size={20} color="#4B5563" />
                                            <TxtSubItem>Refeições Adquiridas</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <AiOutlineSchedule size={20} color="#4B5563" />
                                        <TxtItemMain>Horários</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <FaRegCalendarTimes size={20} color="#4B5563" />
                                            <TxtSubItem>Interrupções</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <BsCalendarDate size={20} color="#4B5563" />
                                            <TxtSubItem>Tempos</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <AiOutlineTable size={20} color="#4B5563" />
                                            <TxtSubItem>Grelhas</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <MdOutlinePivotTableChart size={20} color="#4B5563" />
                                            <TxtSubItem>Grelha Manual</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <FaAddressCard size={20} color="#4B5563" />
                                        <TxtItemMain>Cartões</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <HiDocumentCheck size={20} color="#4B5563" />
                                            <TxtSubItem>Validar cartão</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <RiFolderAddFill size={20} color="#4B5563" />
                                            <TxtSubItem>Adicionar cartão</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <TbFileTime size={20} color="#4B5563" />
                                            <TxtSubItem>Cartões temporários</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <TiFolderDelete size={20} color="#4B5563" />
                                            <TxtSubItem>Remover cartão</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <TbPackgeExport size={20} color="#4B5563" />
                                        <TxtItemMain>Exportações</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub onClick={() => { setServiceContext(1); }}>
                                        <SubItem>
                                            <FaFileInvoiceDollar size={20} color="#4B5563" />
                                            <TxtSubItem>SAF-T PT</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <RiListCheck2 size={20} color="#4B5563" />
                                            <TxtSubItem>Inventário</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub onClick={() => { setServiceContext(2); }}>
                                        <SubItem>
                                            <IoDocumentLockOutline size={20} color="#4B5563" />
                                            <TxtSubItem>Modelo 46</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                            <LIMain>
                                <MainItem>
                                    <MenuMetadata>
                                        <TbReportAnalytics size={20} color="#4B5563" />
                                        <TxtItemMain>Relatórios</TxtItemMain>
                                    </MenuMetadata>
                                    <DropIcon>
                                        <MdOutlineArrowDropDown size={25} color="#4B5563" />
                                    </DropIcon>
                                </MainItem>
                                <ULSub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Requisições</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Ementas servidas</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
                                        <SubItem>
                                            <TxtSubItemOnly>Refeições servidas</TxtSubItemOnly>
                                        </SubItem>
                                    </LISub>
                                </ULSub>
                            </LIMain>
                        </ULMain>
                    </MenuZone>
                </SideMenu>
                <ContainerAtual>
                    <BigLogo>
                        <ImgBigLogo src="/multiusos.svg" title="Multiusos" alt="Multiusos" />
                    </BigLogo>
                </ContainerAtual>
            </BoxContainer>
            <Footer />
        </Container>
    );
}
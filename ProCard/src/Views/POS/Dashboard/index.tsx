import {
    Container,
    BoxContainer,
    MenuSide,
    AppName,
    LogoApp,
    MainContainer,
    LogoBox,
    BoxLoginUser,
    TxtUsername,
    ImgProfile,
    LineServices,
    ServiceItem,
    ServiceName,
    BoxApp,
    BoxList,
    SubMenu,
    TxtTest
} from "./style";

import { FaMoneyBillWave } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCurrencyEuro } from "react-icons/bs";
import { IoPrint } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";

import Footer from "../Components/Footer";

export default function Dashboard(){
    return (
        <Container>
            <BoxContainer>
                <MenuSide>
                    <LogoBox>
                        <LogoApp src="/pos.svg" title="POS" alt="POS" />
                        <AppName>POS</AppName>
                    </LogoBox>
                    <BoxLoginUser>
                        <ImgProfile src="/man.png" title="Nome do Fulano" alt="Nome do Fulano" />
                        <TxtUsername>Rui Santos</TxtUsername>
                    </BoxLoginUser>
                </MenuSide>
                <MainContainer>
                    <LineServices>
                        <ServiceItem>
                            <ServiceName>Caixa</ServiceName>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Bufete</ServiceName>
                            <BoxList>
                                <SubMenu>
                                    <FaMoneyBillWave size={20} color="#444" />
                                    <TxtTest>Carregamento</TxtTest>
                                </SubMenu>
                                <SubMenu>
                                    <GiTakeMyMoney size={20} color="#444" />
                                    <TxtTest>Devolução</TxtTest>
                                </SubMenu>
                                <SubMenu>
                                    <HiOutlineDocumentText size={20} color="#444" />
                                    <TxtTest>Devolver cauções</TxtTest>
                                </SubMenu>
                                <SubMenu>
                                    <BsCurrencyEuro size={20} color="#444" />
                                    <TxtTest>Regularizar</TxtTest>
                                </SubMenu>
                                <SubMenu>
                                    <IoPrint size={20} color="#444" />
                                    <TxtTest>Reimprimir</TxtTest>
                                </SubMenu>
                            </BoxList>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Papelaria</ServiceName>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Reprografia</ServiceName>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Serviços</ServiceName>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Cauções</ServiceName>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Refeições</ServiceName>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceName>Configurar</ServiceName>
                        </ServiceItem>
                    </LineServices>
                    <BoxApp>

                    </BoxApp>
                </MainContainer>
            </BoxContainer>
            <Footer />
        </Container>
    );
}
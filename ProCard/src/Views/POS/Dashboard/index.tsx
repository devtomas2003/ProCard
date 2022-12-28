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
    BoxUserLogin,
    ContainerUserLogin,
    LoginTitle,
    CardTxt,
    LoginBox,
    LoginGroup,
    InpLogin,
    TxtLogin,
    BtnsAction,
    BtnLogin,
    BtnText,
    HeaderZone,
    TxtZone,
    CashContainer,
    BoxUser,
    IMGUser,
    UserMetadata,
    LineUser,
    UserBalance,
    TxtLblBalance,
    ValBalance,
    SideMetadata,
    BtnActionPOS,
    BoxCharge,
    TxtCharge,
    InpCharge,
    LineCharge,
    MoneySymbol,
    TxtChargeSyn,
    BoxContainerCharge,
    LastChargeMetadata,
    LineLastCharge,
    LineLastChr,
    LineLastVal,
    LineTxtLastTime
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

export default function Dashboard(){
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
                                    <LISub>
                                        <SubItem>
                                            <BsCashCoin size={20} color="#4B5563" />
                                            <TxtSubItem>Carregar cartão</TxtSubItem>
                                        </SubItem>
                                    </LISub>
                                    <LISub>
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
                    <HeaderZone>
                        <TxtZone>Caixa » Carregar cartão</TxtZone>
                    </HeaderZone>
                    { false ?
                    <BoxUserLogin>
                        <ContainerUserLogin>
                            <LoginTitle>Login</LoginTitle>
                            <CardTxt>Ou passe o cartão do utente.</CardTxt>
                            <LoginBox>
                                <LoginGroup>
                                    <TxtLogin>Utilizador</TxtLogin>
                                    <InpLogin type="text" required placeholder="Nº de Cartão" autoComplete="off" autoCapitalize="off" autoCorrect="off" />
                                </LoginGroup>
                                <LoginGroup>
                                    <TxtLogin>Password ou PIN</TxtLogin>
                                    <InpLogin type="password" required />
                                </LoginGroup>
                            </LoginBox>
                            <BtnsAction>
                                <BtnLogin type="submit">
                                    <BtnText>Entrar</BtnText>
                                </BtnLogin>
                            </BtnsAction>
                        </ContainerUserLogin>
                    </BoxUserLogin> : null }
                    <CashContainer method="post">
                        <BoxCharge>
                            <BoxContainerCharge>
                                <TxtCharge>Valor a creditar</TxtCharge>
                                <LineCharge>
                                    <InpCharge type="text" required pattern="[0-9,.\-$]+" autoComplete="off" autoCorrect="off" autoCapitalize="off" />
                                    <MoneySymbol>
                                        <TxtChargeSyn>€</TxtChargeSyn>
                                    </MoneySymbol>
                                </LineCharge>
                            </BoxContainerCharge>
                        </BoxCharge>
                        <SideMetadata>
                            <BoxUser>
                                <IMGUser src="https://www.osso.pt/wp-content/uploads/2013/03/765-default-avatar.png" title="Fulano de Tal" alt="Fulano de Tal" />
                                <UserMetadata>
                                    <LineUser>a13105</LineUser>
                                    <LineUser>Tomás Figueiredo</LineUser>
                                    <LineUser>10ºA - 22</LineUser>
                                </UserMetadata>
                            </BoxUser>
                            <UserBalance>
                                <TxtLblBalance>Saldo:</TxtLblBalance>
                                <ValBalance>12,80 €</ValBalance>
                            </UserBalance>
                            <BtnActionPOS>
                                <BtnText>Terminar sessão</BtnText>
                            </BtnActionPOS>
                            <BtnActionPOS type="submit">
                                <BtnText>Confirmar</BtnText>
                            </BtnActionPOS>
                            <LastChargeMetadata>
                                <LineLastCharge>
                                    <LineLastChr>Ultimo carregamento:</LineLastChr>
                                    <LineLastVal>2,00 €</LineLastVal>
                                </LineLastCharge>
                                <LineTxtLastTime>27/11/2022 11:49</LineTxtLastTime>
                            </LastChargeMetadata>
                        </SideMetadata>
                    </CashContainer>
                </ContainerAtual>
            </BoxContainer>
            <Footer />
        </Container>
    );
}
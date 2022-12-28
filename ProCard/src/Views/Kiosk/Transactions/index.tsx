import { useNavigate } from "react-router-dom";

import {
    BoxBackZone,
    BtnBack,
    Container,
    LineServiceDetails,
    MainContainer,
    TxtActualService,
    TableTransactions,
    TRTabTra,
    TDTabTra,
    TableHead,
    TableBody,
    BackZone,
    BtnsActions,
    BtnAction,
    TxtBtn,
    BoxTopMenus,
    BoxMovType,
    MoveTxt
} from "./style";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";

export default function Transactions(){

    const navigate = useNavigate();

    return (
        <Container>
            <Header />
                <MainContainer>
                    <BoxBackZone>
                        <BackZone>
                            <BtnBack onClick={() => { navigate('/kiosk/menu') }}>
                                <IoArrowBackCircleOutline size={50} color="#444" />
                            </BtnBack>
                            <TxtActualService>Transações</TxtActualService>
                        </BackZone>
                        <BtnsActions>
                            <BtnAction>
                                <BiDetail size={20} color="#fff" />
                                <TxtBtn>Obter detalhe</TxtBtn>
                            </BtnAction>
                        </BtnsActions>
                    </BoxBackZone>
                    <BoxTopMenus>
                        <BoxMovType isActive={true}>
                            <MoveTxt>Conta corrente</MoveTxt>
                        </BoxMovType>
                        <BoxMovType isActive={false}>
                            <MoveTxt>Subsídios</MoveTxt>
                        </BoxMovType>
                        <BoxMovType isActive={false}>
                            <MoveTxt>Suplementos</MoveTxt>
                        </BoxMovType>
                        <BoxMovType isActive={false}>
                            <MoveTxt>Consumos</MoveTxt>
                        </BoxMovType>
                    </BoxTopMenus>
                    <LineServiceDetails>
                        <TableTransactions cellPadding={0} cellSpacing={0}>
                            <TableHead>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>Data/Hora</TDTabTra>
                                    <TDTabTra>Local</TDTabTra>
                                    <TDTabTra>Documento</TDTabTra>
                                    <TDTabTra>Metodo de Pagamento</TDTabTra>
                                    <TDTabTra>Valor</TDTabTra>
                                </TRTabTra>
                            </TableHead>
                            <TableBody>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                                <TRTabTra isActive={false}>
                                    <TDTabTra>26/12/2022 10:30</TDTabTra>
                                    <TDTabTra>Refeitório</TDTabTra>
                                    <TDTabTra>Não faturado</TDTabTra>
                                    <TDTabTra>Cartão - Pronto Pagamento</TDTabTra>
                                    <TDTabTra>1,46 €</TDTabTra>
                                </TRTabTra>
                            </TableBody>
                        </TableTransactions>
                    </LineServiceDetails>
                </MainContainer>
            <Footer />
        </Container>
    );
}
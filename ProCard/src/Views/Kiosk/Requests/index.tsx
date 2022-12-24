import { useNavigate } from "react-router-dom";

import {
    BtnBack,
    Container,
    MainContainer,
    BoxBackZone,
    TxtActualService,
    BoxServices,
    ServiceLine,
    TxtDay,
    LineServiceDetails,
    BuyZone,
    BoxMealTime,
    BoxMealType,
    MealTxt,
    TxtDayTypeTxt,
    SelectBox,
    OptionSlct,
    TxtLabel,
    MealTypes,
    BtnAddCart,
    TxtCart,
    ZoneCloseCart,
    BtnEndCart,
    CartInfo,
    TxtInfo,
    TxtInfoBold
} from "./style";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";

export default function Requests(){

    const navigate = useNavigate();

    return (
        <Container>
            <Header />
            <MainContainer>
                <BoxBackZone>
                    <BtnBack onClick={() => { navigate('/kiosk/menu') }}>
                        <IoArrowBackCircleOutline size={50} color="#444" />
                    </BtnBack>
                    <TxtActualService>Adquirir</TxtActualService>
                </BoxBackZone>
                <LineServiceDetails>
                    <BoxServices>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={true}>
                                <MealTxt>Almoço</MealTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Jantar</MealTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Almoço</MealTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Jantar</MealTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Almoço</MealTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Jantar</MealTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Almoço</MealTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Jantar</MealTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Almoço</MealTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Jantar</MealTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Almoço</MealTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTxt>Jantar</MealTxt>
                            </BoxMealTime>
                        </ServiceLine>
                    </BoxServices>
                    <BuyZone>
                        <TxtDayTypeTxt>Almoço - segunda-feira, 30 de agosto de 2022</TxtDayTypeTxt>
                        <TxtLabel>Refeitório</TxtLabel>
                        <SelectBox>
                            <OptionSlct>Refeitório - Escola Secundária de Tondela</OptionSlct>
                            <OptionSlct>Refeitório - Escola Básica do Campo de Besteiros</OptionSlct>
                        </SelectBox>
                        <TxtLabel>Tipo de refeição:</TxtLabel>
                        <MealTypes>
                            <BoxMealType isActive={true}>
                                <MealTxt>Normal</MealTxt>
                            </BoxMealType>
                            <BoxMealType isActive={false}>
                                <MealTxt>Vegetariano</MealTxt>
                            </BoxMealType>
                        </MealTypes>
                        <BtnAddCart isAdd={true}>
                            <BsFillCartPlusFill size={40} color="#fff" />
                            <TxtCart>Adicionar</TxtCart>
                        </BtnAddCart>
                    </BuyZone>
                    <ZoneCloseCart>
                        <CartInfo>
                            <TxtInfo>Total: <TxtInfoBold>122,45 €</TxtInfoBold></TxtInfo>
                            <TxtInfo>Quantidade: <TxtInfoBold>99</TxtInfoBold></TxtInfo>
                        </CartInfo>
                        <BtnEndCart>
                            <BsFillCartCheckFill size={40} color="#fff" />
                            <TxtCart>Terminar carrinho</TxtCart>
                        </BtnEndCart>
                    </ZoneCloseCart>
                </LineServiceDetails>
            </MainContainer>
            <Footer />
        </Container>
    );
}
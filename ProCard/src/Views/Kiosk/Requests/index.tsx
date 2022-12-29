import { useNavigate } from "react-router-dom";

import {
    BtnBack,
    Container,
    MainContainer,
    BoxBackZone,
    TxtActualService,
    LineServiceDetails,
    BoxTopMonth,
    BoxChangeMonth,
    BoxAtualMonth,
    TxtMonth,
    BoxDates,
    BoxDate,
    TxtDate,
    BoxMealTime,
    MealTimeTxt,
    FooterBox,
    HeaderBox,
    TxtSelectedMeal,
    BoxMainContainer,
    BoxSelectedDay,
    TxtLblSelect,
    BoxType,
    BoxMealType,
    MealTypeTxt
} from "./style";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Requests(){

    const navigate = useNavigate();

    return (
        <Container>
            <HeaderBox>
                <Header />
            </HeaderBox>
            <MainContainer>
                <BoxBackZone>
                    <BtnBack onClick={() => { navigate('/kiosk/menu') }}>
                        <IoArrowBackCircleOutline size={50} color="#444" />
                    </BtnBack>
                    <TxtActualService>Adquirir</TxtActualService>
                </BoxBackZone>
                <LineServiceDetails>
                    <BoxTopMonth>
                        <BoxChangeMonth>
                            <IoIosArrowBack size="20" color="#1f61cf" />
                        </BoxChangeMonth>
                        <BoxAtualMonth>
                            <TxtMonth>Agosto 2022</TxtMonth>
                        </BoxAtualMonth>
                        <BoxChangeMonth>
                            <IoIosArrowForward size="20" color="#1f61cf" />
                        </BoxChangeMonth>
                    </BoxTopMonth>
                    <BoxMainContainer>
                        <BoxDates>
                            <BoxDate>
                                <TxtDate>Segunda, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                            <BoxDate>
                                <TxtDate>Terça, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                            <BoxDate>
                                <TxtDate>Quarta, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                            <BoxDate>
                                <TxtDate>Quinta, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                            <BoxDate>
                                <TxtDate>Sexta, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                            <BoxDate>
                                <TxtDate>Sábado, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                            <BoxDate>
                                <TxtDate>Domingo, 1 de Agosto de 2022</TxtDate>
                                <BoxMealTime>
                                    <MealTimeTxt>Almoço</MealTimeTxt>
                                </BoxMealTime>
                                <BoxMealTime>
                                    <MealTimeTxt>Jantar</MealTimeTxt>
                                </BoxMealTime>
                            </BoxDate>
                        </BoxDates>
                        <BoxSelectedDay>
                            <TxtSelectedMeal>Segunda, 1 de Agosto de 2022 - Almoço</TxtSelectedMeal>
                            <TxtLblSelect>Selecione o tipo de refeição</TxtLblSelect>
                            <BoxType>
                                <BoxMealType>
                                    <MealTypeTxt>Almoço</MealTypeTxt>
                                </BoxMealType>
                                <BoxMealType>
                                    <MealTypeTxt>Jantar</MealTypeTxt>
                                </BoxMealType>
                            </BoxType>
                        </BoxSelectedDay>
                    </BoxMainContainer>
                </LineServiceDetails>
            </MainContainer>
            <FooterBox>
                <Footer />
            </FooterBox>
        </Container>
    );
}
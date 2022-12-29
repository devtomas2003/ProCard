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
    BoxMealType,
    MealTypeTxt,
    LineServiceDetails,
    DayTypeDetails,
    TxtDayTypeTxt,
    BoxMealTime,
    BoxMealsCount,
    MealTimeTxt,
    CountTxt
} from "./style";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function View(){

    const navigate = useNavigate();

    return (
        <Container>
            <Header />
            <MainContainer>
                <BoxBackZone>
                    <BtnBack onClick={() => { navigate('/refeitorio/menu') }}>
                        <IoArrowBackCircleOutline size={50} color="#444" />
                    </BtnBack>
                    <TxtActualService>Consulta</TxtActualService>
                </BoxBackZone>
                <LineServiceDetails>
                    <BoxServices>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={true}>
                                <MealTimeTxt>Almoço</MealTimeTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Jantar</MealTimeTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Almoço</MealTimeTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Jantar</MealTimeTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Almoço</MealTimeTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Jantar</MealTimeTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Almoço</MealTimeTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Jantar</MealTimeTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Almoço</MealTimeTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Jantar</MealTimeTxt>
                            </BoxMealTime>
                        </ServiceLine>
                        <ServiceLine>
                            <TxtDay>segunda-feira, 30 ago 2022</TxtDay>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Almoço</MealTimeTxt>
                            </BoxMealTime>
                            <BoxMealTime isActive={false}>
                                <MealTimeTxt>Jantar</MealTimeTxt>
                            </BoxMealTime>
                        </ServiceLine>
                    </BoxServices>
                    <DayTypeDetails>
                        <TxtDayTypeTxt>Almoço - segunda-feira, 30 de agosto de 2022</TxtDayTypeTxt>
                        <BoxMealsCount>
                            <BoxMealType>
                                <MealTypeTxt>Normal</MealTypeTxt>
                                <CountTxt>200</CountTxt>
                            </BoxMealType>
                            <BoxMealType>
                                <MealTypeTxt>Vegetariano</MealTypeTxt>
                                <CountTxt>200</CountTxt>
                            </BoxMealType>
                        </BoxMealsCount>
                        <BoxMealsCount>
                            <BoxMealType>
                                <MealTypeTxt>Total</MealTypeTxt>
                                <CountTxt>400</CountTxt>
                            </BoxMealType>
                        </BoxMealsCount>
                    </DayTypeDetails>
                </LineServiceDetails>
            </MainContainer>
            <Footer />
        </Container>
    );
}
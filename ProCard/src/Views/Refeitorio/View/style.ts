import styled from "styled-components";

interface MealTypeStatus {
    isActive: boolean;
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    user-select: none;
`;

export const MainContainer = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    flex-direction: column;
`;

export const BtnBack = styled.div`
    cursor: pointer;
`;

export const BoxBackZone = styled.div`
    display: flex;
    align-items: center;
`;

export const TxtActualService = styled.p`
    font-size: 25px;
    color: #444;
    margin-left: 5px;
`;

export const BoxServices = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 70vh;
    width: fit-content;
    padding: 5px;
`;

export const ServiceLine = styled.div`
    margin-top: 10px;
`;

export const TxtDay = styled.p`
    color: #444;
`;

export const BoxMealTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props: MealTypeStatus) => props.isActive ? '#34a9cc' : '#fafafa'};
    border: 1px solid ${(props: MealTypeStatus) => props.isActive ? '#34a9cc' : '#ccc'};
    color: ${(props: MealTypeStatus) => props.isActive ? '#fff' : '#333'};
    width: 300px;
    height: 50px;
    border-radius: 4px;
    &:not(:first-child){
        margin-top: 10px;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const MealTimeTxt = styled.p`
    font-size: 16px;
`;

export const LineServiceDetails = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const DayTypeDetails = styled.div`
    margin-left: 25px;
`;

export const TxtDayTypeTxt = styled.p`
    color: #444;
    font-size: 20px;
`;

export const BoxMealsCount = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
`;

export const BoxMealType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    padding: 10px;
    width: 170px;
    height: 80px;
    &:not(:first-child){
        margin-left: 10px;
    }
`;

export const MealTypeTxt = styled.p`
    font-size: 20px;
    color: #444;
    font-weight: bold;
`;

export const CountTxt = styled.p`
    color: #444;
    margin-top: 5px;
    font-size: 18px;
`;
import styled from "styled-components";

interface MealTypeStatus {
    isActive: boolean;
}

interface BtnCardProp {
    isAdd: boolean;
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
    flex-shrink: 0;
    height: 70vh;
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

export const BoxMealType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props: MealTypeStatus) => props.isActive ? '#34a9cc' : '#fafafa'};
    border: 1px solid ${(props: MealTypeStatus) => props.isActive ? '#34a9cc' : '#ccc'};
    color: ${(props: MealTypeStatus) => props.isActive ? '#fff' : '#333'};
    width: 300px;
    height: 50px;
    border-radius: 4px;
    &:hover{
        cursor: pointer;
    }
`;

export const MealTxt = styled.p`
    font-size: 16px;
`;

export const LineServiceDetails = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export const BuyZone = styled.div`
    margin-left: 25px;
`;

export const TxtDayTypeTxt = styled.p`
    color: #444;
    font-size: 20px;
`;

export const SelectBox = styled.select`
    margin-top: 8px;
    padding: 4px;
    color: #444;
    outline: none;
    border: 1px solid #ccc;
`;

export const OptionSlct = styled.option``;

export const TxtLabel = styled.p`
    color: #444;
    margin-top: 10px;
`;

export const MealTypes = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const BtnAddCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin-top: 15px;
    background: ${(props: BtnCardProp) => props.isAdd ? '#34a9cc' : '#df0024' };
    &:hover{
        background: ${(props: BtnCardProp) => props.isAdd ? '#2d96b5' : '#c90021' };
        cursor: pointer;
    }
`;

export const TxtCart = styled.p`
    color: #fff;
    margin-top: 10px;
`;

export const ZoneCloseCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex-shrink: 0;
    margin-left: auto;
`;

export const BtnEndCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: #009f3c;
    text-align: center;
    margin-top: 5px;
    &:hover{
        background: #018734;
        cursor: pointer;
    }
`;

export const CartInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const TxtInfo = styled.p`
    color: #444;
    &:not(:first-child){
        margin-top: 5px;
    }
`;

export const TxtInfoBold = styled.label`
    font-weight: bold;
`;
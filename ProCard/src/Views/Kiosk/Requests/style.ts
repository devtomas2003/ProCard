
import styled from "styled-components";

export const LineServiceDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const TxtActualService = styled.p`
    font-size: 25px;
    color: #444;
    margin-left: 5px;
`;

export const BoxBackZone = styled.div`
    display: flex;
    align-items: center;
`;

export const MainContainer = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    flex-direction: column;
`;

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    user-select: none;
`;

export const BtnBack = styled.div`
    cursor: pointer;
`;

export const BoxTopMonth = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    margin-top: 3px;
    gap: 10px;
`;

export const BoxChangeMonth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    &:hover{
        cursor: pointer;
    }
`;

export const BoxAtualMonth = styled.div`
    background: #f2f2f2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`;

export const TxtMonth = styled.p`
    color: #1f61cf;
`;

export const BoxDates = styled.div`
    overflow-y: auto;
    max-height: calc(100vh - 324px);
    padding: 10px;
    width: 320px;
`;

export const BoxDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    &:not(:first-child){
        margin-top: 10px;
    }
`;

export const TxtDate = styled.p`
    color: #444;
`;

export const BoxMealTime = styled.div`
    background: #f2f2f2;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export const MealTimeTxt = styled.p`
    color: #1f61cf;
`;

export const FooterBox = styled.div`
    height: 87px;
`;

export const HeaderBox = styled.div`
    height: 90px;
`;

export const TxtSelectedMeal = styled.p`
    color: #444;
    margin-bottom: 20px;
    font-size: 20px;
`;

export const BoxMainContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const BoxSelectedDay = styled.div`
    margin-left: 15px;
`;

export const TxtLblSelect = styled.p`
    color: #444;
    margin-top: 10px;
    font-size: 17px;
`;

export const BoxType = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;

export const BoxMealType = styled.div`
    background: #f2f2f2;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    width: 200px;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export const MealTypeTxt = styled.p`
    color: #1f61cf;
`;

export const BoxSelectRef = styled.select`
    padding: 5px;
    margin-top: 10px;
    border-radius: 3px;
    outline: none;
    border: 1px solid #aaa;
`;

export const OptRef = styled.option``;

export const BoxFinishCart = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const CartContainer = styled.div`
    display: flex;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
    border: 1px solid #f0f0f0;
    padding: 10px;
    border-radius: 3px;
`;

export const CartBox = styled.div`
    background: #009f3c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 3px;
    margin-right: 5px;
    &:hover{
        cursor: pointer;
    }
`;

export const TxtCartBox = styled.p`
    text-align: center;
    color: #fff;
    margin-top: 5px;
`;

export const BoxCartTxts = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartTxt = styled.p`
    color: #444;
`;

export const CartTxtBld = styled.label`
    font-weight: bold;
`;
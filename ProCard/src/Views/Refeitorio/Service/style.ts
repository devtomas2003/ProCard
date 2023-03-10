import styled from "styled-components";

interface RequestStatus {
    notAllowed: boolean;
}

interface MealsTaxProps {
    isActive: boolean;
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    user-select: none;
`;

export const MainContainer = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
`;

export const LineRequestChecks = styled.div`
    display: flex;
`;

export const UserCheck = styled.div`
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props: RequestStatus) => props.notAllowed ? '#ffff93' : '#c4ffc4'};
    cursor: ${(props: RequestStatus) => props.notAllowed ? 'pointer' : 'default'};
    height: 500px;
    padding: 20px;
    &:not(:first-child){
        margin-left: 20px;
    }
`;

export const StatusService = styled.p`
    margin-bottom: 10px;
    font-weight: 500;
    color: #444;
    text-transform: uppercase;
`;

export const UserPic = styled.img`
    border: 1px solid #ccc;
    width: 200px;
`;

export const TimeLog = styled.p`
    margin-top: 10px;
    color: #444;
`;

export const LineUserData = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const UserMeta = styled.p`
    margin-top: 10px;
    color: #444;
`;

export const UserMetaExternal = styled.p`
    margin-top: 5px;
    color: #444;
`;

export const BtnsActions = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const BtnAction = styled.div`
    padding: 10px;
    background: #34a9cc;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background: #2d96b5;
    }
    &:not(:first-child){
        margin-left: 10px;
    }
`;

export const BtnText = styled.p`
    color: #fff;
`;

export const ShadowBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoxTaxUser = styled.div`
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 550px;
`;

export const HeaderTop = styled.div`
    display: flex;
    padding: 5px 8px;
    background: #fafafa;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    justify-content: space-between;
`;

export const LogoAppModal = styled.img`
    width: 20px;
`;

export const TxtModal = styled.p`
    color: #444;
    margin-left: 5px;
`;

export const BodyModal = styled.form`
    padding: 10px;
`;

export const BoxMetawindow = styled.div`
    display: flex;
    align-items: center;
`;

export const BoxClose = styled.div`
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export const UserData = styled.p`
    font-size: 14px;
    color: #444;
    &:not(:first-child){
        margin-top: 5px;
    }
`;

export const LblName = styled.label`
    font-weight: bold;
`;

export const ListTypeRefs = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
`;

export const RefTypeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props: MealsTaxProps) => props.isActive ? '#34a9cc' : '#fafafa'};
    border: 1px solid ${(props: MealsTaxProps) => props.isActive ? '#34a9cc' : '#ccc'};
    color: ${(props: MealsTaxProps) => props.isActive ? '#fff' : '#333'};
    width: 120px;
    height: 120px;
    border-radius: 4px;
    &:not(:first-child){
        margin-left: 10px;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const RefTypeTxt = styled.p`
    font-size: 15px;
`;

export const TextConfirm = styled.p`
    color: #444;
    margin-top: 10px;
    font-size: 15px;
`;

export const CheckTax = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const InptChk = styled.input`
    width: 18px;
    height: 18px;
`;

export const TxtTax = styled.label`
    margin-left: 5px;
    color: #444;
`;

export const BtnConfirm = styled.button`
    display: flex;
    align-items: center;
    padding: 5px;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 10px;
    width: fit-content;
    &:hover{
        cursor: pointer;
        background: #f5f5f5;
    }
`;

export const ConfirmTxt = styled.p`
    color: #444;
    margin-left: 5px;
`;

export const TotalPrice = styled.p`
    color: #444;
    font-size: 25px;
    margin-top: 10px;
`;

export const PriceBold = styled.label`
    font-weight: bold;
`;

export const ManualUserEntry = styled.div`
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 550px;
`;

export const InputUserCard = styled.input`
    margin-top: 3px;
    border: 1px solid #aaa;
    padding: 4px;
    outline: none;
    width: 100%;
    color: #444;
`;

export const TxtCardLbl = styled.p`
    font-size: 16px;
    color: #444;
`;

export const MealsData = styled.div`
    display: flex;
    gap: 80px;
`;

export const MealBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    width: 200px;
`;

export const MealBoxTitle = styled.p`
    color: #444;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const TxtMealBox = styled.p`
    color: #444;
    font-size: 18px;
`;

export const BtnBack = styled.div`
    align-self: flex-start;
    cursor: pointer;
`;
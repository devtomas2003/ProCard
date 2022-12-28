import styled from "styled-components";

interface BtnsPOSProps {
    colorBtn: string;
}

export const CashContainer = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
`;

export const BoxUser = styled.div`
    display: flex;
    align-items: center;
`;

export const IMGUser = styled.img`
    width: 100px;
`;

export const UserMetadata = styled.div`
    margin-left: 10px;
`;

export const LineUser = styled.p`
    color: #444;
    &:not(:first-child){
        margin-top: 5px;
    }
`;

export const UserBalance = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
`;

export const TxtLblBalance = styled.p`
    color: #444;
`;

export const ValBalance = styled.p`
    color: #008000;
`;

export const BoxContainerCharge = styled.div`
    background: #fff;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
    border-radius: 10px;
    width: fit-content;
    margin-left: 50px;
    margin-top: 50px;
    padding: 15px;
    border: 1px solid #f0f0f0;
`;

export const SideMetadata = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 10px;
    border-left: 1px solid #ccc;
    min-width: 270px;
    height: 100%;
`;

export const BoxCharge = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TxtCharge = styled.p`
    color: #444;
    margin-left: 10px;
    font-size: 18px;
`;

export const InpCharge = styled.input`
    border: 1px solid #ddd;
    width: 250px;
    margin-right: 8px;
    padding: 5px;
    outline: none;
`;

export const MoneySymbol = styled.div`
    display: flex;
    align-items: center;
`;

export const TxtChargeSyn = styled.p`
    color: #444;
    font-size: 25px;
`;

export const LastChargeMetadata = styled.div`
    display: flex;
    color: #444;
    flex-direction: column;
`;

export const LineLastCharge = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
`;

export const LineLastChr = styled.p``;

export const LineLastVal = styled.p`
    font-weight: bold;
`;

export const LineTxtLastTime = styled.p`
    margin-top: 2px;
`;

export const ChargeBox = styled.div`
    display: flex;
    margin-top: 5px;
`;

export const BtnActionPOS = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: ${(props: BtnsPOSProps) => props.colorBtn === "confirm" ? "#28a745" : props.colorBtn === "cancel" ? "#c82333" : "#1f61cf"};
    width: 100%;
    outline: none;
    border: none;
    padding: 10px;
    height: 35px;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
        background: ${(props: BtnsPOSProps) => props.colorBtn === "confirm" ? "#23913c" : props.colorBtn === "cancel" ? "#b51f2d" : "#1c57ba"};
    }
`;

export const BoxUserLogin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerUserLogin = styled.form`
    width: 400px;
`;

export const LoginTitle = styled.h1`
    color: #444;
    margin-top: 50px;
`;

export const CardTxt = styled.p`
    color: #444;
    font-size: 18px;
    margin-top: 3px;
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const TxtLogin = styled.p``;

export const InpLogin = styled.input`
    padding: 10px;
    border: none;
    outline: none;
    color: #444;
    margin-top: 3px;
    background: #eaf1f7;
    border-radius: 3px;
    &::placeholder{
        color: #444;
    }
`;

export const BtnsAction = styled.div`
    margin-top: 20px;
`;

export const BtnLogin = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #1f61cf;
    width: 100%;
    outline: none;
    border: none;
    padding: 10px;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
        background: #1c57ba;
    }
`;

export const BtnText = styled.p`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;

export const HeaderZone = styled.div`
    background: #f79620;
    padding: 7px;
`;

export const TxtZone = styled.p`
    color: #fff;
`;
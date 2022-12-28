import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    user-select: none;
    width: 100%;
    height: 100%;
`;

export const BoxContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const SideMenu = styled.div`
    padding: 10px;
    width: 300px;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.05);
`;

export const LogoZone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IMGApp = styled.img`
    width: 70px;
    border-radius: 5px;
`;

export const AppName = styled.p`
    color: #444;
    margin-left: 10px;
    font-size: 25px;
`;

export const MenuZone = styled.div`
    margin-top: 10px;
`;

export const TxtItemMain = styled.p`
    color: #4B5563;
    margin-left: 10px;
`;

export const ULSub = styled.ul`
    list-style: none;
    margin-left: 10px;
    display: none;
`;

export const LIMain = styled.li`
    &:hover ${ULSub} {
        display: block;
    }
`;

export const ULMain = styled.ul`
    list-style: none;
`;

export const MainItem = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 3px;
    justify-content: space-between;
    &:hover{
        background: rgba(75, 85, 99, 0.1);
        cursor: pointer;
    }
`;

export const LISub = styled.li`
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 3px;
    &:hover{
        background: rgba(75, 85, 99, 0.1);
        cursor: pointer;
    }
`;

export const SubItem = styled.div`
    display: flex;
    padding: 7px;
    align-items: center;
`;

export const TxtSubItem = styled.p`
    color: #4B5563;
    margin-left: 10px;
`;

export const TxtSubItemOnly = styled.p`
    color: #4B5563;
`;

export const MenuMetadata = styled.div`
    display: flex;
    align-items: center;
`;

export const DropIcon = styled.div`
    display: flex;
`;

export const ContainerAtual = styled.div`
    width: 100%;
    height: 100%;
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

export const LoginGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
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

export const BtnActionPOS = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #1f61cf;
    width: 100%;
    outline: none;
    border: none;
    padding: 10px;
    height: 35px;
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
    background: #f79620;
    width: fit-content;
    margin-left: 50px;
    margin-top: 50px;
    padding: 15px;
`;

export const SideMetadata = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 10px;
    border-left: 1px solid #ccc;
    height: 100%;
`;

export const BoxCharge = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TxtCharge = styled.p`
    color: #fff;
    font-size: 18px;
`;

export const InpCharge = styled.input`
    border: 1px solid #ccc;
    width: 250px;
    padding: 5px;
    outline: none;
`;

export const LineCharge = styled.div`
    display: flex;
    align-items: center;
`;

export const MoneySymbol = styled.div`
    margin-left: 5px;
`;

export const TxtChargeSyn = styled.p`
    color: #fff;
    font-size: 30px;
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
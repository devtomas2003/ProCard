import styled from "styled-components";

interface BtnsAction {
    typeBtn: number;
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;
    width: 100%;
    height: 100%;
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnsAction = styled.div`
    display: flex;
    gap: 15px;
`;

export const ActionBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: ${(props: BtnsAction) => props.typeBtn === 0 ? '#f7941e' : props.typeBtn === 1 ? '#4679c7' : props.typeBtn === 2 ? '#0081b5' : props.typeBtn === 3 ? '#df0024' : props.typeBtn === 4 ? '#2582D3' : '#009f3c'};
    &:hover{
        background: ${(props: BtnsAction) => props.typeBtn === 0 ? '#e0861b' : props.typeBtn === 1 ? '#3d69ad' : props.typeBtn === 2 ? '#00719e' : props.typeBtn === 3 ? '#c90021' : props.typeBtn === 4 ? '#2074bd' : '#018734'};
        cursor: pointer;
    }
`;

export const TxtBtn = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 15px;
    text-align: center;
`;

export const TxtMain = styled.p`
    font-size: 20px;
    color: #444;
    margin-bottom: 10px;
`;

export const NameLogon = styled.label`
    font-weight: bold;
`;

export const CenterContainer = styled.div``;

export const BoxShadow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`;

export const BoxRegister = styled.div`
    padding: 20px;
    border-radius: 5px;
    background: #009f3c;
    display: flex;
    align-items: center;
    width: 500px;
`;

export const IconStatus = styled.div`

`;

export const TxtsZone = styled.div`
    margin-left: 5px;
`;

export const TxtStatus = styled.p`
    color: #fff;
    font-size: 20px;
`;
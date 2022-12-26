import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    user-select: none;
`;

export const MainContainer = styled.form`
    padding: 20px;
    display: flex;
    height: 100%;
    width: 800px;
    flex-direction: column;
    overflow-y: auto;
`;

export const BoxBackZone = styled.div`
    display: flex;
    align-items: center;
`;

export const BtnBack = styled.div`
    cursor: pointer;
`;

export const TxtActualService = styled.p`
    font-size: 25px;
    color: #444;
    margin-left: 5px;
`;

export const ConfigChecks = styled.div`
    margin-left: 5px;
`;

export const LineCheck = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const CkeckInpt = styled.input`
    width: 15px;
    height: 15px;
`;

export const LblText = styled.label`
    color: #444;
    margin-left: 5px;
`;

export const TableKiosk = styled.table`
    margin-top: 5px;
`;

export const TRRef = styled.tr`
    &:nth-child(2n){
        background: #f0f0f0;
    }
`;

export const TDRef = styled.td`
    color: #444;
    font-size: 15px;
    border: 1px solid #ccc;
    padding: 4px;
`;

export const TabHead = styled.thead`
    text-align: center;
    background: #f0f0f0;
`;

export const TabBody = styled.tbody``;

export const BoxSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TxtOption = styled.p`
    color: #444;
    margin-top: 15px;
    font-size: 17px;
`;

export const InptTitle = styled.p`
    color: #444;
    margin-top: 10px;
`;

export const InpConf = styled.input`
    padding: 3px;
    border: 1px solid #ccc;
    margin-top: 2px;
    outline: none;
`;

export const BtnConfirm = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
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
    margin-left: 5px;
    color: #444;
    font-size: 18px;
`;
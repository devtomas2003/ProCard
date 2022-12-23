import styled from "styled-components";

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

export const TableRefeitorios = styled.table`
    margin-top: 20px;
    width: 800px;
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
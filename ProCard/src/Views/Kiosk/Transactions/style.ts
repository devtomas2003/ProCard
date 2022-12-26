import styled from "styled-components";

interface LineTableProps {
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

export const BoxBackZone = styled.div`
    display: flex;
    justify-content: space-between;
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

export const LineServiceDetails = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TableTransactions = styled.table`
    width: 100%;
    margin-top: 2px;
`;

export const TRTabTra = styled.tr`
    background: ${(props: LineTableProps) => props.isActive ? "#34a9cc" : null};
    color: ${(props: LineTableProps) => props.isActive ? "#fff" : null};
    &:nth-child(2n){
        background: ${(props: LineTableProps) => props.isActive ? "#34a9cc" : "#f0f0f0" };
    }
`;

export const TDTabTra = styled.td`
    padding: 2px;
    color: #444;
    text-align: center;
`;

export const TableHead = styled.thead`
    background: #f0f0f0;
    font-weight: bold;
`;

export const TableBody = styled.tbody``;

export const BackZone = styled.div`
    display: flex;
    align-items: center;
`;

export const BtnsActions = styled.div``;

export const BtnAction = styled.div`
    background: #34a9cc;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 5px;
    &:hover{
        cursor: pointer;
        background: #2e92b0;
    }
`;

export const TxtBtn = styled.p`
    color: #fff;
    margin-left: 5px;
`;
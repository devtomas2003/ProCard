import styled from "styled-components";

export const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background: #34a9cc;
    align-items: center;
    padding: 10px;
`;

export const LeftLogos = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const ImgApp = styled.img`
    width: 70px;
    border-radius: 5px;
`;

export const TxtApp = styled.p`
    color: #fff;
    margin-left: 10px;
    font-size: 25px;
`;

export const TimeBox = styled.div`
    display: flex;
    margin-right: 20px;
`;

export const BoxTime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &:not(:last-child){
        margin-right: 70px;
    }
`;

export const LineTime = styled.p`
    color: #fff;
    font-size: 22px;
    &:first-child{
        font-size: 35px;
        font-weight: 500;
    }
`;

export const UserMetadata = styled.div`
    display: flex;
    align-items: center;
    margin-right: 70px;
`;

export const IMGUser = styled.img`
    height: 70px;
`;

export const UserInfo = styled.div`
    margin-left: 10px;
`;

export const UserTxt = styled.p`
    color: #fff;
    &:not(:first-child){
        margin-top: 4px;
    }
    &:last-child{
        font-weight: bold;
    }
`;
import styled from "styled-components";

interface BtnStatusPOS {
    isActive: boolean;
}

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
    flex-direction: column;
    height: 100%;
`;

export const MenuSide = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const AppName = styled.p`
    color: #444;
    margin-left: 10px;
    font-size: 25px;
`;

export const LogoApp = styled.img`
    width: 70px;
    border-radius: 5px;
`;

export const MainContainer = styled.div`
    display: flex;
`;

export const LogoBox = styled.div`
    display: flex;
    padding: 10px;
    align-items: flex-end;
`;

export const BoxLoginUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const TxtUsername = styled.p`
    color: #444;
    margin-top: 3px;
    font-size: 18px;
`;

export const ImgProfile = styled.img`
    width: 45px;
`;

export const LineServices = styled.div`
    display: flex;
    background: #f5f2f2;
    margin-top: 10px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
`;

export const ServiceItem = styled.div`
    position: relative;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f5f2f2;
    &:not(:first-child){
        border-left: 1px solid #ccc;
    }
    &:last-child{
        border-right: 1px solid #ccc;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const ServiceName = styled.p`
    color: #444;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 7px;
    margin-right: 7px;
    font-size: 15px;
`;

export const BoxApp = styled.div``;

export const BoxList = styled.div`
    position: absolute;
    background: #f5f2f2;
    width: 200px;
    border: 1px solid #ccc;
    margin-top: 1px;
`;

export const SubMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    &:hover{
        background: #e3e1e1;
    }
`;

export const TxtTest = styled.p`
    margin-left: 5px;
`;
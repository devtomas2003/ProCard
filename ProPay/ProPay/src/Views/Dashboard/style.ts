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
    display: flex;
    flex-direction: column;
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
    overflow-y: auto;
    display: flex;
    width: 100%;
    flex: 1;
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
    width: 100%;
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
    margin-top: 5px;
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
    flex: 1;
    height: 100%;
`;

export const BigLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ImgBigLogo = styled.img`
    width: 150px;
    border-radius: 5px;
`;
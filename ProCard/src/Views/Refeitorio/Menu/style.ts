import styled from "styled-components";

interface BtnsAction {
    typeBtn: number;
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

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

export const FooterApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f0f0f0;
    padding: 10px;
`;

export const LogoProCard = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgLogoPC = styled.img`
    width: 50px;
`;

export const TxtLogo = styled.p`
    font-weight: 500;
    font-size: 30px;
    color: #444;
`;

export const TextProCard = styled.div`
    margin-left: 15px;
`;

export const LineCopyright = styled.p`
    color: #444;
    margin-top: 3px;
`;

export const LinkProject = styled.a`
    color: #1f61cf;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const SchoolData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ImgSchool = styled.img`
    height: 45px;
`;

export const SchoolName = styled.p`
    margin-top: 3px;
    font-size: 16px;
    font-weight: 500;
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
    user-select: none;
    background: ${(props: BtnsAction) => props.typeBtn === 0 ? '#f7941e' : props.typeBtn === 1 ? '#4679c7' : props.typeBtn === 2 ? '#0081b5' : '#df0024'};
    &:hover{
        background: ${(props: BtnsAction) => props.typeBtn === 0 ? '#e0861b' : props.typeBtn === 1 ? '#3d69ad' : props.typeBtn === 2 ? '#00719e' : '#c90021'};
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

export const CenterContainer = styled.div`

`;
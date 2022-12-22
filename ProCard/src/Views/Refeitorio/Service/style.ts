import styled from "styled-components";

interface RequestStatus {
    notAllowed: boolean;
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LineRequestChecks = styled.div`
    display: flex;
`;

export const UserCheck = styled.div`
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props: RequestStatus) => props.notAllowed ? '#ffff93' : '#c4ffc4'};
    cursor: ${(props: RequestStatus) => props.notAllowed ? 'pointer' : 'default'};
    height: 500px;
    padding: 20px;
    &:not(:first-child){
        margin-left: 20px;
    }
`;

export const StatusService = styled.p`
    margin-bottom: 10px;
    font-weight: 500;
    text-transform: uppercase;
`;

export const UserPic = styled.img`
    border: 1px solid #ccc;
    width: 200px;
`;

export const TimeLog = styled.p`
    margin-top: 10px;
`;

export const LineUserData = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const UserMeta = styled.p`
    margin-top: 10px;
`;

export const UserMetaExternal = styled.p`
    margin-top: 5px;
`;

export const BtnsActions = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const BtnAction = styled.div`
    padding: 10px;
    background: #34a9cc;
    border-radius: 5px;
    user-select: none;
    &:hover{
        cursor: pointer;
        background: #2d96b5;
    }
    &:not(:first-child){
        margin-left: 10px;
    }
`;

export const BtnText = styled.p`
    color: #fff;
`;
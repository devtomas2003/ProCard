import styled from "styled-components";

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
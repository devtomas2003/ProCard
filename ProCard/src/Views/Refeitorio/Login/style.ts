import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    user-select: none;
`;

export const ImgLogo = styled.img`
    width: 80px;
`;

export const TxtLogo = styled.h1`
    margin-left: 15px;
    font-weight: 500;
    font-size: 50px;
    color: #444;
`;

export const LeftLogos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const LoginBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const LogoApp = styled.img`
    width: 70px;
    border-radius: 50%;
`;

export const LogoAppContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LoginTitle = styled.h1`
    color: #444;
    margin-top: 50px;
`;

export const LoginContainer = styled.form`
    width: 400px;
`;

export const LoginGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
`;

export const TxtLogin = styled.p``;

export const InpLogin = styled.input`
    padding: 10px;
    border: none;
    outline: none;
    color: #444;
    margin-top: 3px;
    background: #eaf1f7;
    border-radius: 3px;
    &::placeholder{
        color: #444;
    }
`;

export const BtnsAction = styled.div`
    margin-top: 20px;
`;

export const BtnLogin = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #1f61cf;
    width: 100%;
    outline: none;
    border: none;
    padding: 10px;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
        background: #1c57ba;
    }
`;

export const BtnText = styled.p`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;

export const LineSeparator = styled.div`
    width: 1px;
    height: 100%;
    background: #e5e5e5;
`;

export const CardTxt = styled.p`
    color: #444;
    font-size: 18px;
    margin-top: 3px;
`;

export const ImgSchoolLogo = styled.img`
    width: 160px;
`;

export const LogosList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

export const LogoProCardBox = styled.div`
    display: flex;
    align-items: center;
`;

export const LineSchool = styled.p`
    margin-top: 20px;
`;

export const LineCopyright = styled.p`
    color: #444;
    margin-top: 10px;
`;

export const LinkProject = styled.a`
    color: #1f61cf;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
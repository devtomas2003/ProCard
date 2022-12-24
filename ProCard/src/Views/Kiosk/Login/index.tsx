import {
    Container,
    ImgLogo,
    TxtLogo,
    LeftLogos,
    LoginBox,
    LogoApp,
    LogoAppContainer,
    LoginTitle,
    LoginContainer,
    LoginGroup,
    TxtLogin,
    InpLogin,
    BtnsAction,
    BtnLogin,
    BtnText,
    LineSeparator,
    CardTxt,
    ImgSchoolLogo,
    LogosList,
    LogoProCardBox,
    LineSchool,
    LineCopyright,
    LinkProject
} from "./style";

export default function Login(){
    return (
        <Container>
            <LeftLogos>
                <LogosList>
                    <LogoProCardBox>
                        <ImgLogo src="/logo.svg" title="ProCard" alt="ProCard" />
                        <TxtLogo>ProCard</TxtLogo>
                    </LogoProCardBox>
                    <ImgSchoolLogo src="http://localhost:8080/assets/logo.png" title="Nome da Escola" alt="Nome da Escola" />
                </LogosList>
                <LineSchool>Agrupamento de Escolas de Tondela - Tomaz Ribeiro</LineSchool>
            </LeftLogos>
            <LineSeparator />
            <LoginBox>
                <LoginContainer method="post">
                    <LogoAppContainer>
                        <LogoApp src="/kiosk.svg" title="Kiosk" alt="Kiosk" />
                        <TxtLogo>Kiosk</TxtLogo>
                    </LogoAppContainer>
                    <LoginTitle>Login</LoginTitle>
                    <CardTxt>Ou passe o seu cartão.</CardTxt>
                    <LoginBox>
                        <LoginGroup>
                            <TxtLogin>Utilizador</TxtLogin>
                            <InpLogin type="text" required placeholder="Nº de Cartão" autoComplete="off" autoCapitalize="off" autoCorrect="off" />
                        </LoginGroup>
                        <LoginGroup>
                            <TxtLogin>Password</TxtLogin>
                            <InpLogin type="password" required />
                        </LoginGroup>
                    </LoginBox>
                    <BtnsAction>
                        <BtnLogin type="submit">
                            <BtnText>Entrar</BtnText>
                        </BtnLogin>
                    </BtnsAction>
                    <LineCopyright>2022 - {new Date().getFullYear()} © <LinkProject onClick={() => { alert("https://github.com/devtomas2003/ProCard"); }}>ProCard</LinkProject>. <LinkProject onClick={() => { alert("https://github.com/devtomas2003/ProCard/blob/Development/LICENSE"); }}>MIT License</LinkProject></LineCopyright>
                </LoginContainer>
            </LoginBox>
        </Container>
    );
}
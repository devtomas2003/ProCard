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
    LogosList,
    LineCopyright,
    LinkProject
} from "./style";

export default function Login(){
    return (
        <Container>
            <LeftLogos>
                <LogosList>
                    <ImgLogo src="/logo.svg" title="ProCard" alt="ProCard" />
                    <TxtLogo>ProCard</TxtLogo>
                </LogosList>
            </LeftLogos>
            <LineSeparator />
            <LoginBox>
                <LoginContainer method="post">
                    <LogoAppContainer>
                        <LogoApp src="/propay.svg" title="ProPay" alt="ProPay" />
                        <TxtLogo>ProPay</TxtLogo>
                    </LogoAppContainer>
                    <LoginTitle>Login</LoginTitle>
                    <LoginBox>
                        <LoginGroup>
                            <TxtLogin>Utilizador</TxtLogin>
                            <InpLogin type="text" required placeholder="GEPE/Nº Atribuido" autoComplete="off" autoCapitalize="off" autoCorrect="off" />
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
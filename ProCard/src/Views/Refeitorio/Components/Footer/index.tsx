import {
    FooterApp,
    LogoProCard,
    ImgLogoPC,
    TxtLogo,
    TextProCard,
    LineCopyright,
    LinkProject,
    SchoolData,
    ImgSchool,
    SchoolName,
} from "./style";

export default function Footer(){
    return (
        <FooterApp>
            <LogoProCard>
                <ImgLogoPC src="/logo.svg" title="Pro Card" alt="Pro Card" />
                <TextProCard>
                    <TxtLogo>ProCard</TxtLogo>
                    <LineCopyright>2022 - {new Date().getFullYear()} © <LinkProject onClick={() => { alert("https://github.com/devtomas2003/ProCard"); }}>ProCard</LinkProject>. <LinkProject onClick={() => { alert("https://github.com/devtomas2003/ProCard/blob/Development/LICENSE"); }}>MIT License</LinkProject></LineCopyright>
                </TextProCard>
            </LogoProCard>
            <SchoolData>
                <ImgSchool src="http://192.168.1.10:8080/assets/logo.png" title="Nome da escola" alt="Nome da Escola" />
                <SchoolName>Agrupamento de Escolas de Tondela - Tomaz Ribeiro</SchoolName>
            </SchoolData>
        </FooterApp>
    );
}
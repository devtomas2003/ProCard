import { useState } from "react";

import {
    CashContainer,
    BoxUser,
    IMGUser,
    UserMetadata,
    LineUser,
    UserBalance,
    TxtLblBalance,
    ValBalance,
    SideMetadata,
    BtnActionPOS,
    BoxContainerMain,
    LastChargeMetadata,
    LineLastCharge,
    LineLastChr,
    LineLastVal,
    LineTxtLastTime,
    BtnText,
    BoxUserLogin,
    ContainerUserLogin,
    LoginTitle,
    CardTxt,
    LoginBox,
    InpLogin,
    TxtLogin,
    BtnsAction,
    BtnLogin,
    HeaderZone,
    TxtZone,
    BoxContainerRefound,
    MoneySymbol,
    TxtRefound,
    RefoundBox,
    TxtRefoundSyn,
    InpRefound
} from "./style";

import { FaMoneyBill } from "react-icons/fa";

export default function RefoundCard(){

    const [moduleContext, setModuleContext] = useState(0);

    return (
        <>
            <HeaderZone>
                <TxtZone>Caixa » Devolução</TxtZone>
            </HeaderZone>
            { moduleContext === 0 ?
            <BoxUserLogin>
                <ContainerUserLogin>
                    <LoginTitle>Login</LoginTitle>
                    <CardTxt>Ou passe o cartão do utente.</CardTxt>
                    <LoginBox>
                        <TxtLogin>Utilizador</TxtLogin>
                        <InpLogin type="text" required placeholder="Nº de Cartão" autoComplete="off" autoCapitalize="off" autoCorrect="off" />
                    </LoginBox>
                    <BtnsAction>
                        <BtnLogin type="submit">
                            <BtnText>Entrar</BtnText>
                        </BtnLogin>
                    </BtnsAction>
                </ContainerUserLogin>
            </BoxUserLogin> : moduleContext === 1 ?
            <CashContainer method="post">
            <BoxContainerMain>
                <BoxContainerRefound>
                    <MoneySymbol>
                        <FaMoneyBill size={25} color="#444" />
                        <TxtRefound>Valor a devolver</TxtRefound>
                    </MoneySymbol>
                    <RefoundBox>
                        <InpRefound type="text" required pattern="[0-9,.\-$]+" autoComplete="off" autoCorrect="off" autoCapitalize="off" />
                        <TxtRefoundSyn>€</TxtRefoundSyn>
                    </RefoundBox>
                </BoxContainerRefound>
            </BoxContainerMain>
                <SideMetadata>
                    <BoxUser>
                        <IMGUser src="https://www.osso.pt/wp-content/uploads/2013/03/765-default-avatar.png" title="Fulano de Tal" alt="Fulano de Tal" />
                        <UserMetadata>
                            <LineUser>a13105</LineUser>
                            <LineUser>João Dias</LineUser>
                            <LineUser>10ºA - 22</LineUser>
                        </UserMetadata>
                    </BoxUser>
                    <UserBalance>
                        <TxtLblBalance>Saldo:</TxtLblBalance>
                        <ValBalance>12,80 €</ValBalance>
                    </UserBalance>
                    <BtnActionPOS type="submit" colorBtn="confirm">
                        <BtnText>Confirmar</BtnText>
                    </BtnActionPOS>
                    <BtnActionPOS colorBtn="cancel">
                        <BtnText>Terminar sessão</BtnText>
                    </BtnActionPOS>
                    <LastChargeMetadata>
                        <LineLastCharge>
                            <LineLastChr>Ultima devolução:</LineLastChr>
                            <LineLastVal>2,00 €</LineLastVal>
                        </LineLastCharge>
                        <LineTxtLastTime>27/11/2022 11:49</LineTxtLastTime>
                    </LastChargeMetadata>
                </SideMetadata>
            </CashContainer> : null }
        </>
    );
}
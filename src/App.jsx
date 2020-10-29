import React from "react";
import authService from "./services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import { colors } from "./utils/auxilliary/globalStyles";
import loginBgUrl from "./img/BG_LOGIN.svg";
import LogoUrl from "./img/Logo.png";

const LoginPage = styled.div`
    background-color: ${colors.primaryBg};
    background-image: url(${loginBgUrl});
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;

    height: 100vh;
    width: 100vw;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 16px;
    max-width: 1000px;
    padding-top: 50vh;
    margin: auto;
`;

const LogoWrapper = styled.div`
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;

    img {
        margin-top: -32em;
        transform: translateX(80%);
    }
`;

function App() {
    const [user] = useAuthState(authService.auth);

    return (
        <LoginPage>
            <LogoWrapper>
                <img src={LogoUrl} alt="Logo" />
            </LogoWrapper>
            <Wrapper>
                <LoginForm />
            </Wrapper>
        </LoginPage>
    );
}

export default App;

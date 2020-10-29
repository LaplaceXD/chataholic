import React from "react";
import authService from "./services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import loginBgUrl from "./img/BG_LOGIN.svg";

const LoginPage = styled.div`
    background-color: black;
    background-image: url(${loginBgUrl});
    background-repeat: no-repeat;
    background-position: center;

    height: 100vh;
    width: 100vw;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
    max-width: 1000px;

    margin: auto;
    width: 100vw;
    height: 100vh;
`;

function App() {
    const [user] = useAuthState(authService.auth);

    return (
        <LoginPage>
            <Wrapper>
                <LoginForm />
            </Wrapper>
        </LoginPage>
    );
}

export default App;

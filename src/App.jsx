import React from "react";
import authService from "./services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";

const Wrapper = styled.div`
    background: linear-gradient(135deg, #7e8ce0, #4361ff);
    height: 100vh;
    width: 100vw;
`;

function App() {
    const [user] = useAuthState(authService.auth);

    return (
        <Wrapper>
            <LoginForm />
            {user && <h1>{user.displayName}</h1>}
        </Wrapper>
    );
}

export default App;

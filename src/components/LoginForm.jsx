import React from "react";
import styled from 'styled-components';
import Button from "./common/Button";

const LoginWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 2em;
    border-radius: 4px;

    background-color: #1F2236;
`;

function LoginForm() {
    return (
        <LoginWrapper>
            <Button theme="google" label="Sign in with Google" icon={["fab", "google"]} />
        </LoginWrapper>
    );
}

export default LoginForm;

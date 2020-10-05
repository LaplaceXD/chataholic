import React from "react";
import styled from 'styled-components';
import Button from "./common/Button";

const LoginWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1.5em;
    border-radius: 8px;
    height: 25em;

    background-color: #1F2236;
    box-shadow: 4px 4px 20px rgba(38, 40, 51, 0.5);
`;

function LoginForm() {
    return (
        <LoginWrapper>
            <Button theme="google" label="Sign in with Google" icon={["fab", "google"]} />
        </LoginWrapper>
    );
}

export default LoginForm;

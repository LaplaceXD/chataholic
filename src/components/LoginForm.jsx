import React from "react";
import styled from 'styled-components';
import Button from "./common/Button";
import miniLogo from "../img/MiniLogo.png";
import Input from './common/Input';

const LoginWrapper = styled.div`
    grid-column: 1 / 6;
    transform: translateY(-50%);
    text-align: center;

    img {
        margin-bottom: 2em;
    }

    h1 {
        margin-bottom: 0.75em;
    }

    input {
        margin-bottom: 1.5em;
    }
`;

const Header = styled.h1`
    text-transform: uppercase;
    font-size: 3.5rem;
`;

function LoginForm() {
    return (
        <LoginWrapper>
            <img src={miniLogo} alt="Zephyr Logo." />
            <Header>Sign In</Header>
            <Input type="text" name="Username" />
            <Input type="password" name="Password" />
            <Button theme="google" label="Sign in with Google" icon={["fab", "google"]} />
        </LoginWrapper>
    );
}

export default LoginForm;

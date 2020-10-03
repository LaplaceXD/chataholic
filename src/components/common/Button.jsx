import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonThemes = {
    default: css`
        
    `,
    google: css`
        color: #5a5e63;
        background-color: #ffffff;

        &:hover {
            background-color: #C6CFFF;
        }
    `,
};

const StyledButton = styled.button`
    border: 0;
    border-radius: 4px;
    padding: 0.75em 1.5em;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background-color 300ms ease;
    ${(props) => (props.theme ? buttonThemes[props.theme] : "")};

    &:active {
        transform: translateY(3px);
    }

    .icon {
        margin-right: 0.75em;
    }
`;

function Button({ icon, label, theme, onClick }) {
    return (
        <StyledButton onClick={onClick} theme={theme}>
            <FontAwesomeIcon icon={icon} className="icon"/>
            {label}
        </StyledButton>
    );
}

export default Button;

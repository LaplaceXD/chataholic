import React from "react";
import styled, { css } from "styled-components";

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: left;

    input {
        background: none;
        border: 0;
        outline: none;
        border-bottom: white 2px solid;
        color: white;
        font-size: 1.5rem;

        &:focus, &:valid {
            ${props => css`
                ${props.name} ~ label {
                    font-size: 1rem;
                    opacity: 100%;
                    top: -20px;
                }
            `}
        }
    }

    label {
        position: absolute;
        top: -4px;
        font-weight: 300;
        font-size: 1.5rem;
        opacity: 70%;
        transition: all 250ms ease;
    }
`;

function Input({ name, value, onChange, ...attributes }) {
    return (
        <InputWrapper>
            <input id={name} onChange={onChange} value={value} {...attributes} required/>
            <label for={name}>{name}</label>
        </InputWrapper>
    );
}

export default Input;

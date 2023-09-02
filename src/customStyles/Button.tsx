import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: var(--typography-color);
    background: var(--activity-element-color);
    padding: .7rem 2rem;
    border-radius: .3rem;
    font-weight: 600;
    transition: .5s;
    cursor: pointer;
    text-transform: uppercase;
    width: fit-content;

    &:hover {
        outline: .2rem solid var(--activity-element-color);
        background: var(--bg-color)
    }
`
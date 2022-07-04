import styled from "styled-components"

export const Anchor = styled.a`
margin-left: 1rem;
`

export const Body = styled.svg`
    cursor: pointer;
    fill: white;
    transition: fill .2s linear;
    &:hover{
        fill: ${(({ theme }) => theme.colors.secondary)};
    }
`
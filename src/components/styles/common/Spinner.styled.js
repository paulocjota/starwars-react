import styled from "styled-components"

export const Body = styled.svg`
    width: 5rem;
    height: 5rem;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    animation: spin 1s linear infinite;
    fill: ${({ theme }) => theme.colors.secondary};
`
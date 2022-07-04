import styled from "styled-components"

export const Body = styled.div`
    margin: 1rem;
    background-color: ${({ theme }) => theme.colors.danger};
    padding: 0.5rem 0.375rem;
    border-radius: 0.2rem;
    border: 0.3125rem ${({ theme }) => theme.colors.primary} solid;
    font-weight: bold;
`
import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
`

export const Body = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.mono};
    font-size: 0.8rem;
`
import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Body = styled.header`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.screens.xl};
    margin: 0 auto;
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        &{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`
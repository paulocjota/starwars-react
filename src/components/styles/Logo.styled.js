import styled from "styled-components"
import { Link as LinkUninstyled } from "react-router-dom"

export const Body = styled.div`
    flex: 1;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    min-height: 2.5rem;
`

export const Link = styled(LinkUninstyled)`
    color: white;
    font-family: ${({ theme }) => theme.fontFamily.mono};
    text-decoration: none;
`
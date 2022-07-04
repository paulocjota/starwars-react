import { Link } from 'react-router-dom'
import styled from "styled-components"
import { MenuIcon as Hamburguer } from '@heroicons/react/solid'

export const IndexBody = styled.div`
    background-color: transparent;
    display: ${props => props.opened ? 'flex' : 'none'};
    flex-direction: column;
    @media(min-width: ${({theme}) => theme.screens.sm}){
        &{
            flex-direction: row;
            margin: 0 2rem;
            display: flex;
        }
        & a:not(:first-child){
            margin-left: 1rem;
        }
    }
`

export const ItemBody = styled(Link)`
    text-decoration: none;
    background-color: transparent;
    color: white;
    padding: 1rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: .2s;
    font-family: ${({ theme }) => theme.fontFamily.mono};
    text-align: center;
    white-space: nowrap;
    font-size: 0.8rem;
    &:hover{
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const ToggleContainer = styled.div`
    display: flex;
`

export const ToggleWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        &{
            display: none;
        }
    }
`

export const ToggleIcon = styled(Hamburguer)`
    width: 2rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
    color: white;
    transition-property: background-color, color;
    transition-duration: .2s;
`

export const ToggleBody = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover ${ToggleIcon}{
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`
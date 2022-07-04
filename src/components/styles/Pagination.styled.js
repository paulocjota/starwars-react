import {
    ChevronLeftIcon as ChevronLeftIconUninstyled,
    ChevronRightIcon as ChevronRightIconUninstyled
} from "@heroicons/react/solid"
import styled from "styled-components"

export const UlBody = styled.ul`
    display: flex;
    list-style-type: none;
    font-family: ${({theme}) => theme.fontFamily.sans};
    font-size: 1.5rem;
    gap: 0.5rem;
    margin-bottom: 1rem;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`

const Li = styled.li`
    border-radius: 0.375rem;
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    &:hover{
        background-color: dimgray;
    }
    pointer-events: ${props => props.disabled ? 'none' : 'unset'};
    ${props => props.disabled ? 'background-color: gray;' : ''};
`

export const LiBody = styled(Li)`
    display: none;
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        display: flex;
    }
    ${props => props.currentPage ? `
        background-color: ${props.theme.colors.secondary};
        color: ${props.theme.colors.primary};
       ` : ''}
`

export const EllipsisBody = styled(Li)`
    background-color: transparent;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.primary};
    display: none;
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        display: flex;
    }
`

export const ArrowLeftBody = styled(Li)`
    min-width: 6rem;
    &::after{
        content: 'Anterior';
    }
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        min-width: unset;
        &::after{
            content: ''
        }
    }
`

export const ArrowRightBody = styled(Li)`
min-width: 6rem;
    &::before{
        content: 'Próximo';
    }
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        min-width: unset;
        &::before{
            content: ''
        }
    }
`

export const ChevronLeftIcon = styled(ChevronLeftIconUninstyled)`
    max-width: 1rem;
`

export const ChevronRightIcon = styled(ChevronRightIconUninstyled)`
    max-width: 1rem;
`

export const CurrentPage = styled(Li)`
    display: flex;
    @media(min-width: ${({ theme }) => theme.screens.sm}){
        display: none;
    }
`

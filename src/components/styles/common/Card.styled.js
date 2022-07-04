import styled from "styled-components"
import Container from '../../layouts/Container'

export const IndexWrapper = styled(Container)`
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    @media(min-width: ${({ theme }) => theme.screens.lg}){
        padding: 0;
    }
`

export const CardBody = styled.div`
    font-family:  ${({ theme }) => theme.fontFamily.sans};
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.375rem;
    border: solid 0.6rem ${({ theme }) => theme.colors.primary};
    padding: 0.375rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    overflow: hidden;
    transition-property: transform, box-shadow, border, background-color;
    transition-duration: .3s;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    & a{
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    &:hover{
        border-color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.secondary};
        transform: scale(1.05);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`

export const CardTable = styled.table`
    & {
        flex-grow: 1;
        border-collapse: collapse;
        border-color: ${({ theme }) => theme.colors.primary};
        width: 100%;
    }

    & th{
        font-weight: normal;
        text-align: center;
        width: 30%;
    }

    & td{
        font-weight: bold;
        text-align: center;
        padding: 0.6rem 0;
        width: 70%;
        font-size: 1rem;
    }

    & th, & td, & thead th, & tbody + tbody{
        border: 0;
    }

    & tr:nth-child(odd){
        background-color: white;
        color: black;
    }

    & tr:nth-child(even){
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
    }
`

export const CardImgWrapper = styled.div`
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
    & img{
        height: 100%;
        width: 100%;
        object-fit: center center;
    }
`

export const CardIconWrapper = styled.div`
    position: relative;
`
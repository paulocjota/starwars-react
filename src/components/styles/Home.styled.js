import styled from "styled-components"

export const ImgWrapper = styled.div`
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    animation-name: zoom-in-down;
    animation-duration: 2s;
    animation-fill-mode: both;
    & img{
        display: block;
        width: 100%;
        max-width: 480px;
    }
`

export const P = styled.p`
    font-family: ${({theme}) => theme.fontFamily.sans};
    font-size: 1.5rem;
    line-height: 2.2rem;
    text-align: justify;
    text-justify: inter-word;
    animation: fade-in-bck 0.6s 1.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    margin: 1rem;
    margin-bottom: 2rem;
    @media(min-width: ${({ theme }) => theme.screens.lg}){
        margin: 0 0 3rem 0;
    }
`
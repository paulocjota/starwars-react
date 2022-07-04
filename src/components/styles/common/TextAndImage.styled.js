import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 4rem;
    flex-direction: column;
    @media(min-width: ${props => props.theme.screens.sm}){
        flex-direction: row;
    }
`

export const NoImageWrapper = styled.div`
    display: 'inline-block';
    float: 'left';
    min-width: '320px';
    margin-top: '-2rem';
`

export const Img = styled.img`
    max-height: 480px;
    float: left;
    margin-right: 3rem;
    margin-bottom: 1.5rem;
    width: 100%;
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @media(min-width: ${props => props.theme.screens.sm}){
        width: unset;
        min-width: 320px;
    }
`

export const P = styled.p`
    display: block;
    font-family: ${({theme}) => theme.fontFamily.sans};
    font-size: 1.5rem;
    line-height: 2.2rem;
    margin: 1.5rem 1rem;
    text-align: justify;
    text-justify: inter-word;
    animation: fade-in-bck 0.6s 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @media(min-width: ${({theme}) => theme.screens.sm}){
        display: inline;
        margin: unset;
    }
`
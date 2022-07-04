import styled from "styled-components"
import { SearchIcon as SearchIconUninstyled } from "@heroicons/react/solid"

export const SearchWrapper = styled.div`
    position: relative;
    margin-bottom: 1rem;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`

export const SearchInput = styled.input`
    width: 100%;
    line-height: 0;
    border: 0.375rem solid ${({ theme }) => theme.colors.primary};
    padding: 0.35rem 3rem;
    border-radius: 0.375rem;
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    transition-property: background-color;
    transition-duration: .3s;
    font-size: 1.2rem;
    color: dimgray;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    &:focus{
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    &::placeholder{
        color: white;
    }
    &:focus::placeholder{
        color: dimgray;
    }
    &:focus ~ svg{
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const SearchIcon = styled(SearchIconUninstyled)`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: .50rem;
    left: 0.5rem;
    color: white;
`
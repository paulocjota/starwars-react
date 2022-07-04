import { BanIcon } from "@heroicons/react/outline";
import { CameraIcon } from "@heroicons/react/solid";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    animation: fade-in-bck 0.6s 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const Body = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
`

export const CameraIconBody = styled(CameraIcon)`
    width: 3rem;
    height: 3rem;
    position: absolute;
    background-color: transparent;
    color: #d1d5db;
`

export const BanIconBody = styled(BanIcon)`
    width: 5rem;
    height: 5rem;
    position: absolute;
    color: #d1d5db;
    background-color: transparent;
`
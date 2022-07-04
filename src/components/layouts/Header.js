import { useState } from 'react'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import React from 'react'
import { Wrapper, Body } from '../styles/layouts/Header.styled'

export default function Header(){
    const [opened, setOpened] = useState(false)

    function handleToggleOpened(opened){
        setOpened(!opened)
    }

    return (
        <Wrapper>
            <Body>
                <Menu.ToggleContainer>
                    <Logo />
                    <Menu.Toggle
                        opened={opened}
                        onClick={() => {handleToggleOpened(opened)}}
                    ></Menu.Toggle>
                </Menu.ToggleContainer>
                <Menu opened={opened}>
                    <Menu.Item to="/">Início</Menu.Item>
                    <Menu.Item to="/characters">Personagens</Menu.Item>
                    <Menu.Item to="/planets">Planetas</Menu.Item>
                </Menu>
            </Body>
        </Wrapper>
    )
}
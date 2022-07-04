import Github from '../common/icon/Github'
import Linkedin from '../common/icon/Linkedin'
import { Wrapper, Body, IconWrapper } from '../styles/layouts/Footer.styled'

export default function Footer(){
    return (
        <Wrapper>
            <Body>
                Copyright © 2022 by Paulo (paulocjota)
                <IconWrapper>
                <Github link="https://github.com/paulocjota" />
                <Linkedin link="https://www.linkedin.com/in/paulo-viticoski-junior-69760b235/" />
                </IconWrapper>
            </Body>
        </Wrapper>
    )
}
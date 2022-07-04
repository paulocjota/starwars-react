import {
    ToggleWrapper as Wrapper,
    ToggleBody as Body,
    ToggleIcon as Icon
} from '../styles/Menu.styled'

export default function Toggle({onClick}){
    return (
        <div style={{ display: 'flex' }}>
            <Wrapper onClick={onClick}>
                <Body>
                    <Icon />
                </Body>
            </Wrapper>
        </div>
    )
}
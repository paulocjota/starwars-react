import styled from "styled-components"

export const Body = styled.div`
    width: 100%;
    ${props => props.centralize ? 'margin: 0 auto;' : ''}
    ${props => {
        return Object.keys(props.theme.screens).reduce((previousValue, currentValue) => {
            return previousValue.concat(
                `@media(min-width: ${props.screen ? props.theme.screens[props.screen] : props.theme.screens[currentValue]}){
                    max-width: ${props.screen ? props.theme.screens[props.screen] : props.theme.screens[currentValue]};
                }\n`
            )
        })
    }}
`
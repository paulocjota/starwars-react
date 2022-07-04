import styled from "styled-components"

const sizes = [
    '100%', '50%', '33.333333%', '25%', '20%', '16.666667%'
]

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: calc(-1 * ${props => props.gap}) 0 0 calc(-1 * ${props => props.gap});

    & > *{
        flex-shrink: 1;
        margin: ${props => props.gap} 0 0 ${props => props.gap};
        flex-basis: calc(${props => sizes[props.def-1]} - ${props => props.gap});

        ${props => (
            Object.keys(props.theme.screens).reduce(
                (previousValue, currentValue) => (
                    previousValue.concat(
                        `@media(min-width: ${props.theme.screens[currentValue]}){
                            flex-basis: calc(${sizes[props[currentValue]-1]} - ${props.gap});
                        }\n`
                    )
                ), ''
            )
        )}
    }
`
import { Body } from '../styles/layouts/Container.styled'

Container.defaultProps = {
    centralize: true,
    screen: null,
}

export default function Container({children, centralize, screen, ...otherProps}){
    return (
        <Body centralize={centralize} screen={screen} {...otherProps}>{children}</Body>
    )
}
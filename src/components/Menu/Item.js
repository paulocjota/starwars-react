import { ItemBody as Body } from '../styles/Menu.styled'

export default function Item({ text, children, to }){
    return (
        <Body to={to}>{text ? text : children}</Body>
    )
}
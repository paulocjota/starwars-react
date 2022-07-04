import Item from './Item'
import Toggle from './Toggle'
import { IndexBody as Body, ToggleContainer } from '../styles/Menu.styled'

function Menu({children, opened}){
    return (
        <Body opened={opened}>{children}</Body>
    )
}

Menu.Item = Item
Menu.ToggleContainer = ToggleContainer
Menu.Toggle = Toggle

export default Menu
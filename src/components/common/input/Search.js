import {
    SearchWrapper as Wrapper,
    SearchInput as Input,
    SearchIcon as Icon
} from '../../styles/common/input/Search.styled'

export default function SearchInput({ ...props }){
    return (
        <Wrapper>
            <Input {...props} />
            <Icon />
        </Wrapper>
    )
}
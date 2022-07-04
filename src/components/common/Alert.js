import { Body } from "../styles/common/Alert.styled"

function Error({text, children}){
    return (
        <Body>{text ?? children}</Body>
    )
}

Error.defaultProps = {
    text: null
}

export default Error
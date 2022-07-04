import {
    BanIconBody,
    Body,
    CameraIconBody,
    Wrapper
} from '../styles/common/NoImage.styled'

export default function NoImage({ ...props }){
    return (
        <Wrapper { ...props }>
                <Body>
                    <CameraIconBody />
                    <BanIconBody />
                </Body>
        </Wrapper>
    )
}
import Container from "../layouts/Container"

export default function Main({children}){
    return (
        <Container screen="lg" style={{ flexGrow: '1' }}>
            <main>{children}</main>
        </Container>
    )
}
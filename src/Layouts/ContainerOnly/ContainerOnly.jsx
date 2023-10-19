import Container from '~/Layouts/Components/Container/Container'

function Layouts({ children }) {
    return (
        <div>
            <Container>{children}</Container>
        </div>
    )
}

export default Layouts

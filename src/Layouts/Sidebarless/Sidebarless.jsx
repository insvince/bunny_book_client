import Container from '~/Layouts/Components/Container/Container'
import Footer from '~/Layouts/Components/Footer/Footer'

function Layouts({ children }) {
    return (
        <div>
            <Container>{children}</Container>
            <Footer />
        </div>
    )
}

export default Layouts

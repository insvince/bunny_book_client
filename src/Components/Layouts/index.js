import Container from './../Components/Container/Container'
import Sidebar from './../Components/Sidebar/Sidebar'
import Footer from './../Components/Footer/Footer'

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <Container>{children}</Container>
            <Footer />
        </div>
    )
}

export default DefaultLayout

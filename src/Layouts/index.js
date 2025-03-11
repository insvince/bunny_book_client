import Container from '~/Layouts/Components/Container/Container';
import Sidebar from '~/Layouts/Components/Sidebar/Sidebar';
import Footer from '~/Layouts/Components/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <Container>{children}</Container>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

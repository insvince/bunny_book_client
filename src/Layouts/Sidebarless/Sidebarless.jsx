import Container from '~/Layouts/Components/Container/Container';
import Footer from '~/Layouts/Components/Footer/Footer';

function Layouts({ children }) {
    return (
        <div>
            <Container layout>{children}</Container>
            <Footer layout />
        </div>
    );
}

export default Layouts;

import Container from './../../Components/Container/Container';
import Footer from './../../Components/Footer/Footer';

function Layouts({ children }) {
    return (
        <div>
            <Container>{children}</Container>
            <Footer />
        </div>
    );
}

export default Layouts;

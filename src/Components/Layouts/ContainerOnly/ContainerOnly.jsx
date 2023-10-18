import Container from './../../Components/Container/Container';

function Layouts({ children }) {
    return (
        <div>
            <Container>{children}</Container>
        </div>
    );
}

export default Layouts;

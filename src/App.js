import Navbar from './components/Navbar';
import styled from 'styled-components';
import Intro from './components/Intro';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`;

function App() {
    return (
        <Container>
            <Navbar />
            <Intro />
        </Container>
    );
}

export default App;

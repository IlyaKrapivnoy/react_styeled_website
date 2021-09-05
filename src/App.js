import Navbar from './components/Navbar';
import styled from 'styled-components';
import Intro from './components/Intro';
import Feature from './components/Feature';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`;
const IntroShape = styled.div`
    clip-path: polygon(100% 0, 61% 0%, 51% 41%, 66% 99%, 100% 100%);
    background-color: crimson;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`;

function App() {
    return (
        <>
            <Container>
                <Navbar />
                <Intro />
                <IntroShape />
            </Container>
            <Container>
                <Feature />
            </Container>
        </>
    );
}

export default App;

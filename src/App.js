import Navbar from './components/Navbar';
import styled, { css } from 'styled-components';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Service from './components/Service';
import Footer from './components/Footer';
import Contact from './components/Contact';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
`;

const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
    background-color: pink;
`;

const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 33% 0%, 87% 100%, 0 100%);
    background-color: teal;
`;

const App = () => {
    return (
        <>
            <Container>
                <Navbar />
                <Intro />
                <IntoShape />
            </Container>
            <Container>
                <Feature />
                <FeatureShape />
            </Container>
            <Container>
                <Service />
                <ServiceShape />
            </Container>
            <Container>
                <Contact />
                <Footer />
            </Container>
        </>
    );
};

export default App;

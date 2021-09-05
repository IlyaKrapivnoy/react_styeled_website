import styled from 'styled-components';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right = styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.span`
    font-size: 70px;
`;

const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`;

const Desc = styled.p`
    font-size: 20px;
    color: #252525;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 220px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`;

const Service = () => {
    return (
        <Container>
            <Left>
                <Button>Watch Video</Button>
            </Left>
            <Right>
                <Title>Want to see the best video ever?</Title>
                <SubTitle>We know what are you looking for.</SubTitle>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae sequi dolor adipisci porro voluptatem non dolore.
                    Accusantium optio architecto obcaecati?
                </Desc>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Service;

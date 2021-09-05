import styled from 'styled-components';
import Guy from '../img/guy.png';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    width: 60%;
    font-size: 60px;
`;
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`;
const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: crimson;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    letter-spacing: 2px;
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;
const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
    margin-bottom: 10px;
`;
const ContactText = styled.span`
    color: gray;
`;
const Right = styled.div`
    width: 40%;
`;
const Image = styled.img`
    width: 100%;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventure in creative age</Title>
                <Desc>
                    We believe that designing products and services in close
                    partnership with our clients is the only way to have a real
                    impact on their business.{' '}
                </Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (012) 345 - 6789</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Guy} />
            </Right>
        </Container>
    );
};

export default Intro;

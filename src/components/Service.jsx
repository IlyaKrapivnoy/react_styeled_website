import { useState } from 'react';
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

const Video = styled.video`
    display: ${(props) => !props.open && 'none'};
    height: 400px;
`;

const Right = styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: ${(props) => props.open && 'none'};
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
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Left>
                <Button onClick={() => setOpen(!open)}>Watch Video</Button>
            </Left>
            <Right>
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
                />
                <RightWrapper open={open}>
                    <Title>Want to see the best video ever?</Title>
                    <SubTitle>We know what are you looking for.</SubTitle>
                    <Desc>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quae sequi dolor adipisci porro voluptatem non
                        dolore. Accusantium optio architecto obcaecati?
                    </Desc>
                </RightWrapper>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Service;

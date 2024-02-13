import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ChatbotWrapper = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3887BE;
`;

const ChatbotContainer = styled.div`
    font-family: Arial, sans-serif;
    font-size: large;
    width: 36%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

const MessageContainer = styled.div`
    height: 75%;
    overflow-y: auto;
    scrollbar-width: none;
    scroll-behavior: smooth; 
    /* scroll-snap-type: y mandatory; */
`;

const Message = styled.div`
    /* scroll-snap-align: start; */
    color: #fff;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    word-wrap: break-word;
    width: fit-content;
    max-width: 80%;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease forwards;

    &.incoming {
        background-color: #5800FF;
        border-radius: 15px 15px 15px 0;
        margin-left: 10px;
    }

    &.outgoing {
        background-color: #0B60B0;
        border-radius: 15px 15px 0 15px;
        margin-left: auto;
        
    }
`;




const UserInput = styled.div`
    margin-bottom: auto;
    border: 5px solid #fff;
    border-radius: 15px 15px 15px 15px;
    width: 100%;
    height: 20%;
    display: inline-flex;
    align-items: center;
`;

const MessageInput = styled.textarea`
    width: 100%;
    height: 80%;
    outline: none;
    border: none;
    padding-left: 10px;
    font-size: 1.4rem;
    resize: none;
    background: transparent;
    color: #fff;
    scrollbar-width: none;
`;

const SendButton = styled.button`
    background-color: transparent;
    height: 100%;
    border: none;
    cursor: pointer;
    font-size: 3rem;
`;

const DiceButton = styled.button`
    background-color: transparent;
    height: 100%;
    border: none;
    cursor: pointer;
    font-size: 3rem;
`;

const bulgeAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
`;

const SendIcon = styled.span`
    transition: transform 0.3s ease-out;
    display: inline-block; 

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

const DiceIcon = styled.span`
    transition: transform 0.3s ease-out;
    display: inline-block; 

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }

    &.bulge {
        animation: ${bulgeAnimation} 0.5s ease alternate infinite;
    }
`;

export {
    ChatbotWrapper,
    ChatbotContainer,
    MessageContainer,
    Message,
    UserInput,
    MessageInput,
    SendButton,
    DiceButton,
    SendIcon,
    DiceIcon,
};

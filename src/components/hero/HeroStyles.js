import styled from 'styled-components'


const HeroWrapper = styled.section`
    display: flex;
    flex-direction: row;
    background-color: #3396FF;
    justify-content: center;
    height: 100vh;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const HeroContainer = styled.div`
    flex: 1;
    margin-right: 30px;
    margin-left: 30px;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        flex: none;
        width: 100%;
        font-size: 2rem;
    }
`;

const Typewriter = styled.div`
    font-size: 2rem;
    color: #200E3A;
    min-height: 80px;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
        min-height: 40px;
    }
`;

const SelfieContainer = styled.div`
    flex: 1;
    position: relative;
    border-radius: 50%;
    height: 70%;

    @media screen and (max-width: 768px) {
        height: 80%;
    }
`;

const Selfie = styled.img`
    height: 100%;
    object-fit: cover;
    border: 5px solid #fff;
    background-color: #52D3D8;
    border-radius: 50%;
`;


export {
    HeroWrapper,
    HeroContainer,
    Typewriter,
    SelfieContainer,
    Selfie
}
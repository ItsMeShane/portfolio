import styled from 'styled-components';

const ProjectWrapper = styled.section`
    background-color: #3396FF;
    min-height: 100vh;
    height: auto;
    padding-top: 5vh;
    padding-bottom: 5vh;
`;

const ProjectContainer = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProjectTitle = styled.div`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    padding-top:1vh;
`;

const ProjectCard = styled.div`
    width: 70%;
    height: 70vh;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 5vh;
    margin-bottom: 5vh;
    /* border: 1px solid #ddd; */
    border-radius: 8px;
    text-align: left;
    display: flex;
`;

const ProjectThumbnail = styled.div`
    width: 70%;
    margin-left: 20px;
    margin-right: 20px;
    overflow: hidden; 
    display: flex;
    justify-content: center; 
    align-items: center;    
    border-radius:10px;

    transition: all 0.5s ease;

    &:hover {
        /* scale: 1.025; */
        /* scale: 0.95; */
    }
`;
const ThumbnailImage = styled.img`
    max-height: 100%; 
    transition: all 0.5s ease;
    border-radius:10px;

    &:hover {
        scale: 1.05;
    }
`;



const ProjectInfo = styled.div`
    width: 30%;
    margin-left: 20px;
    margin-right: 20px;
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
`;

const ProjectLinks = styled.div`
    margin-top: 20px;

`;

const CustomButton = styled.a`
    display: block;
    text-align: center;
    margin-bottom: 10px;
    
    text-decoration: none;
    color: #333;
    padding: 10px 20px;
    border: 2px solid #333;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #333;
        color: #fff;  
    }
`


const ProjectTags = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Tag = styled.span`
    background-color: #ccc;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 5px;
`;


const ProjectDescription = styled.p`
    background-color: #3388ff;
    border-radius: 10px;
    color: #333;
    font-size: 1.1rem;
    margin-top: 20px;
    padding: 3px;
    text-align: left;
    padding: 15px;
    line-height: 1.3;
    max-height:30%;
    overflow-y: auto;
`;


export {
    ProjectWrapper,
    ProjectContainer,
    ProjectTitle,
    ProjectCard,
    ProjectInfo,
    ProjectTags,
    Tag,
    ProjectLinks,
    CustomButton,
    ProjectDescription,
    ProjectThumbnail,
    ThumbnailImage
};
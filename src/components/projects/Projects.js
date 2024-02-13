import React, { useState } from 'react';
import { ProjectWrapper, ProjectContainer, ProjectCard, ProjectInfo, ProjectTags, ProjectLinks, ProjectDescription, ProjectThumbnail, ThumbnailImage, Tag, CustomButton, ProjectTitle } from './ProjectStyles';
import { projectData } from '../../constants/constants';

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const displayProjects = showAllProjects ? projectData : projectData.slice(0, 3);

    return (
        <ProjectWrapper>
            <ProjectContainer>
                {displayProjects.map((project, index) => (
                    <ProjectCard key={index}>
                        {index % 2 === 0 ? (
                            <>
                                <ProjectThumbnailContents project={project} />
                                <ProjectInfoContents project={project} />
                            </>
                        ) : (
                            <>
                                <ProjectInfoContents project={project} />
                                <ProjectThumbnailContents project={project} />
                            </>
                        )}
                    </ProjectCard>
                ))}
                <CustomButton onClick={() => setShowAllProjects(!showAllProjects)}>
                    {showAllProjects ? 'View Less Projects' : 'View More Projects'}
                </CustomButton>
            </ProjectContainer>
        </ProjectWrapper>
    );
};

const ProjectThumbnailContents = ({ project }) => (
    <ProjectThumbnail>
        <ThumbnailImage src={project.img} alt={project.title} />
    </ProjectThumbnail>
);

const ProjectInfoContents = ({ project }) => (
    <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectLinks>
            {project.links.map((link, index) => (
                <CustomButton key={index} href={link.url} target='_blank'>{link.text}</CustomButton>
            ))}
        </ProjectLinks>
        <ProjectTags>
            {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
            ))}
        </ProjectTags>
        <ProjectDescription>{project.description}</ProjectDescription>
    </ProjectInfo>
);

export default Projects;
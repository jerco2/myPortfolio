import React from "react";
import Project from "./Project";
import projectlist from "./projectlist";

function Projects() {
  return (
    <div
      className={`flex flex-col tablet:flex-row mt-8 laptop:m-8 items-center tablet:justify-center`}
    >
      {projectlist.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            imgurl={project.imgurl}
            titleColor={project.titleColor}
            tool1={project.tool1}
            tool2={project.tool2}
            description={project.description}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
          />
        );
      })}
    </div>
  );
}

export default Projects;

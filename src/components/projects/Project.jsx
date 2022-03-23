import React from "react";
import { HiLink } from "react-icons/hi";

function Project({
  title,
  imgurl,
  titleColor,
  tool1,
  tool2,
  description,
  codeLink,
  liveLink,
}) {
  return (
    <div className={`w-[300px] shadow-lg mb-5 laptop: m-5`}>
      <img className={`w-full`} src={imgurl} alt="" />
      <h1
        className={`font-semibold ${titleColor} tracking-widest text-white w-full text-center text-2xl p-2`}
      >
        {title}
      </h1>
      <div
        className={`w-full flex flex-col justify-center items-center px-4 pb-4`}
      >
        <div className={`flex w-full justify-center my-2`}>
          <img className={`mr-2`} src={tool1} alt="" />
          <img src={tool2} alt="" />
        </div>
        <p className={`text-sm text-justify`}>{description}</p>
        <hr className={`my-2 w-full`} />
        <span className={`w-full font-semibold`}>Code:</span>
        <a
          className={`flex items-center hover:text-blue-500 w-full pl-4`}
          target="_blank"
          rel="noreferrer"
          href={codeLink}
        >
          <HiLink />
          <span className={`ml-1`}>github-link</span>
        </a>
        <span className={`w-full font-semibold`}>Live:</span>
        <a
          className={`flex items-center hover:text-blue-500 w-full pl-4`}
          target="_blank"
          rel="noreferrer"
          href={liveLink}
        >
          <HiLink />
          <span className={`ml-1`}>heroku</span>
        </a>
      </div>
    </div>
  );
}

export default Project;

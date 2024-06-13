import { GithubLogo, GlobeHemisphereWest } from "phosphor-react";

interface LastProjectsProps {
  project: string;
  tech: string;
  image: string;
  bgColor: string;
}

export default function LastProjects({
  project,
  tech,
  image,
  bgColor,
}: LastProjectsProps) {
  return (
    <div className="flex flex-col justify-center place-items-center h-64 w-52 gap-2">
      <p className="self-start font-medium text-2xl">{project}</p>
      <div
        className={`flex self-start justify-center place-items-center h-5 w-fit rounded-2xl p-2 text-sm text-gray-300 bg-gray-300`}
      >
        {tech}
      </div>
      <div className={`flex h-36 w-full rounded-lg p-2 ${bgColor}`}>
        <img src={image} />
      </div>
      <div className="flex self-start gap-2">
        <a className="cursor-pointer flex flex-row place-items-center text-sm text-black gap-0.5">
          Github
          <GithubLogo size={16} weight="fill" />
        </a>
        <a className="cursor-pointer flex flex-row place-items-center text-sm text-black gap-0.5">
          Deploy
          <GlobeHemisphereWest size={16} />
        </a>
      </div>
    </div>
  );
}

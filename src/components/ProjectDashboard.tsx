import { ProjectData } from "../data/ProjectData";

const ProjectDashboard = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center border-b border-b-zinc-100  h-12">
        Project Information
      </div>
      <div className="flex flex-row flex-wrap w-full   pt-6 px-8 justify-between  items-center ">
        {ProjectData.map(({ id, title, name }) => (
          <div
            className="flex flex-col justify-start bg-white h-44 w-72 rounded-xl shadow-md mt-10"
            key={id}
          >
            <div className="border-b py-4 border-b-zinc-100 bg-primary-50 bg-opacity-50 text-primary-500 flex items-center px-4 text-[14px] rounded-tl-xl rounded-tr-xl">
              {title}
            </div>
            <h1 className="px-4 text-[30px] w-48 font-medium pt-2">{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;

import { ProjectDetailsData } from "../../data/ProjectDetailsData";

import dots from "../../assets/images/dots.svg";
import user from "../../assets/images/user.svg";
import calender from "../../assets/images/calendar.svg";

const ManagerProjectsComponent = () => {
  return (
    <div className="flex flex-wrap space-x-6 w-full h-screen">
      {ProjectDetailsData.map(
        ({ id, title, color, projectManager, projectType, initialDate }) => (
          <div
            key={id}
            className="flex flex-col px-6 py-4 h-44 shadow-sm rounded-2xl bg-white "
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <div
                  style={{ backgroundColor: color }}
                  className="w-3 h-3 rounded-full"
                ></div>
                <p>{projectType}</p>
              </div>
              <div className="flex items-center justify-center px-3 py-2 border border-border rounded-md">
                <img src={dots} alt="" />
              </div>
            </div>
            <div>
              <h1 className="text-[25px] font-medium break-words">{title}</h1>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-primary-500">Project Manager</h1>
                <div className="flex space-x-2">
                  <img src={user} alt="" />
                  <p>{projectManager}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-500">Initiative Date</h1>
                <div className="flex space-x-2">
                  <img src={calender} alt="" width={15} />
                  <p>{initialDate}</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ManagerProjectsComponent;

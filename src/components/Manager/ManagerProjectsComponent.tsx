import { ProjectDetailsData } from "../../data/ProjectDetailsData";
import dots from "../../assets/images/dots.svg";
import user from "../../assets/images/user.svg";
import calendar from "../../assets/images/calendar.svg";

const ManagerProjectsComponent = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-8  w-full h-full">
        {ProjectDetailsData.map(
          ({ id, title, color, projectManager, projectType, initialDate }) => (
            <div
              key={id}
              className="flex flex-col px-6 py-8  drop-shadow-md rounded-2xl bg-white space-y-6"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div
                    style={{ backgroundColor: color }}
                    className="w-2 h-2 rounded-full"
                  ></div>
                  <p className="text-[14px]">{projectType}</p>
                </div>
                <div className="flex items-center justify-center px-2 py-1 border border-opacity-30 border-border rounded-md">
                  <img src={dots} alt="dots" width={20} />
                </div>
              </div>
              <div>
                <h1 className="text-[25px] font-medium">{title}</h1>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col space-y-2">
                  <h1 className="text-primary-500 text-sm font-semibold">
                    Project Manager
                  </h1>
                  <div className="flex space-x-2">
                    <img src={user} alt="user" />
                    <p className="text-sm">{projectManager}</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-primary-500 text-sm font-semibold">
                    Initiative Date
                  </h1>
                  <div className="flex space-x-2">
                    <img src={calendar} alt="calendar" width={15} />
                    <p className="text-sm">{initialDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ManagerProjectsComponent;

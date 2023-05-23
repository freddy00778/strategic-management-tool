import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import ManagerProjectsComponent from "../../components/Manager/ManagerProjectsComponent";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ManagerProjects = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/project/dashboard");
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <Header backgroundImage={avatar} className="h-1/4">
        <h1 className="text-primary-500 text-[28px] font-normal">Projects</h1>
      </Header>
      <div className="flex-grow overflow-hidden h-3/4 p-7 space-y-8">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-[#000] font-semibold text-[18px]">
              Number of Projects
            </h1>
            <div className="flex items-center justify-center px-4 py-2 border border-border rounded-xl">
              4
            </div>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={handleRoute}
            className="rounded-lg w-[30%]"
            type="button"
          >
            Add Project
          </Button>
        </div>
        <div className="grid grid-rows-auto gap-y-10 h-full overflow-y-auto scrollbar-none">
          <ManagerProjectsComponent />
        </div>
      </div>
    </div>
  );
};

export default ManagerProjects;

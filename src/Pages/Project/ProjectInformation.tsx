import ProjectInfoForm from "../../components/ProjectInfoForm";
import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";

const ProjectInformation = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header backgroundImage={avatar} className="h/14">
        <h1 className="text-primary-500 text-[28px] font-normal">
          Project Information
        </h1>
      </Header>
      <ProjectInfoForm />
    </div>
  );
};

export default ProjectInformation;

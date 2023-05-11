import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import ProjectDashboard from "../../components/ProjectDashboard";
import RiskInfo from "../../components/RiskInfo";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen space-y-6">
      <Header backgroundImage={avatar} className="h/14">
        <h1>Hello,</h1>
        <span className="text-primary-500">Desmond !</span>
        <h1>Welcome Back</h1>
      </Header>
      <div className="p-7 space-y-8 +w-full h-screen">
        <h1 className="text-primary-500 text-[18px]">Project Dashboard</h1>
        <div className="max-h-[450px] overflow-y-auto scrollbar-none space-y-10">
          <ProjectDashboard />
          <RiskInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;

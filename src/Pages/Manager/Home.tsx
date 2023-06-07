import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";

const ManagerHome = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header backgroundImage={avatar} className="h-1/4">
        <h1>Hello,</h1>
        <span className="text-primary-500">Desmond !</span>
        <h1>Welcome Back</h1>
      </Header>
      <div className="flex-grow overflow-hidden h-3/4 p-7 space-y-8">
        <h1 className="text-primary-500 text-[18px]">Managers Dashboard</h1>
        <div className="grid grid-rows-auto gap-y-10 h-full overflow-y-auto scrollbar-none">
          {/* You can add more components here and they will take up equal space and scroll if needed */}
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;

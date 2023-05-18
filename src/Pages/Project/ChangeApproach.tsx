import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import ChangeApproachForm from "../../components/ChangeApproachForm";

const ChangeApproach = () => {
  return (
    <div className="flex flex-col w-full h-full  ">
      <Header backgroundImage={avatar} className="h-1/4">
        <h1 className="text-primary-500 text-[28px] font-normal">
          Change Approach
        </h1>
      </Header>
      <div className="h-3/4">
        <ChangeApproachForm />
      </div>
    </div>
  );
};

export default ChangeApproach;

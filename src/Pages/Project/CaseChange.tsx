import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import CaseForChangeForm from "../../components/CaseForChangeForm";

const CaseChange = () => {
  return (
    <div className="flex flex-col w-full h-full  ">
      <Header backgroundImage={avatar} className="h-1/4">
        <h1 className="text-primary-500 text-[28px] font-normal">
          Case For Change
        </h1>
      </Header>
      <div className="h-3/4">
        <CaseForChangeForm />
      </div>
    </div>
  );
};

export default CaseChange;

import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import KeyChangesLayout from "../../components/keyChanges/KeyChangesLayout";

const KeyChanges = () => {
  return (
    <div className="flex flex-col w-full h-screen space-y-6 ">
      <Header backgroundImage={avatar} className="h/14">
        <h1 className="text-primary-500 text-[28px] font-normal">
          Key Changes & Impact
        </h1>
      </Header>
      <div className="px-7 h-3/4">
        <KeyChangesLayout />
      </div>
    </div>
  );
};

export default KeyChanges;

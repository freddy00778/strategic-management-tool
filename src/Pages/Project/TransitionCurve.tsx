import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import transition from "../../assets/images/transition.svg";

const TransitionCurve = () => {
  return (
    <div className="flex flex-col w-full h-screen ">
      <Header backgroundImage={avatar} className="h/14">
        <h1 className="text-primary-500 text-[28px] font-normal">
          Transition Curve
        </h1>
      </Header>
      <div className="h-3/4 flex items-center justify-center">
        <img src={transition} alt="" />
      </div>
    </div>
  );
};

export default TransitionCurve;

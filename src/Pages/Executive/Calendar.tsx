import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";

const Calendar = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header backgroundImage={avatar} className="h-1/4">
        <h1 className=" text-primary-500">Calendar</h1>
      </Header>
      <div className="flex-grow overflow-hidden h-3/4 p-7 space-y-8">
        <div className="grid grid-rows-auto gap-y-10 h-full overflow-y-auto scrollbar-none">
          {/* You can add more components here and they will take up equal space and scroll if needed */}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

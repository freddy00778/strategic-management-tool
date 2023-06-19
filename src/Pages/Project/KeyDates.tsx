import Header from "../../components/Header";
import avatar from "../../assets/images/avatar.jpg";
import KeyDatesLayout from "../../components/KeyDates/KeyDatesLayout";

interface keyProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
const KeyDates: React.FC<keyProps> = ({ date, setDate, text, setText }) => {
  return (
    <div className="flex flex-col w-full h-screen space-y-6">
      <Header backgroundImage={avatar} className="h/14">
        <h1 className="text-primary-500 text-[28px] font-normal">Key Dates</h1>
      </Header>
      <div className="px-7 py-6 h-3/4">
        <KeyDatesLayout
          date={date}
          setDate={setDate}
          text={text}
          setText={setText}
        />
      </div>
    </div>
  );
};

export default KeyDates;

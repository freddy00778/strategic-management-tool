import { RiskData } from "../data/RiskData";

const RiskInfo = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center border-b border-b-zinc-100  h-12">
        Risks, Issues & Decisions
      </div>
      <div className="flex w-full h-full py-6 flex-wrap items-center justify-between px-8">
        {RiskData.map(({ id, topTitle, title, riskContent, total }) => (
          <div key={id}>
            <h1>{topTitle}</h1>
            <div className="flex flex-col justify-start bg-white h-44 w-72 rounded-xl shadow-md mt-10">
              <div className="border-b py-4 border-b-zinc-100  bg-opacity-50  flex w-full items-center justify-between px-4 text-[14px] rounded-tl-xl rounded-tr-xl">
                <div>{title}</div>
                <div>{total}</div>
              </div>
              {riskContent?.map(({ id, value, number, color }) => (
                <div
                  key={id}
                  className={`flex items-center border-b border-b-zinc-100 justify-between w-full px-4`}
                >
                  <div className={`bg-${color}`}>{value}</div>
                  <div>{number}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskInfo;

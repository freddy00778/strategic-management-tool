import { VictoryPie, VictoryLegend } from "victory";
import { ChangeActivityData } from "../../data/ChangeActivityData";

const ExecutiveDashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex flex-wrap gap-20">
          {ChangeActivityData.map(({ id, topTitle, acitvity }) => (
            <div key={id} className="flex flex-col space-y-6">
              <h1 className=" text-xl">{topTitle}</h1>
              <div className="flex  w-full ">
                <div className="flex w-full   ">
                  <div className="flex w-full space-x-6 ">
                    {acitvity.map(({ id, title, data }) => {
                      const chartData = data.datasets[0].data.map(
                        (item, index) => ({
                          x: data.labels[index],
                          y: item,
                        })
                      );

                      const legendData = data.labels.map((label, index) => ({
                        name: label,
                        symbol: {
                          fill: data.datasets[0].backgroundColor[index],
                        },
                      }));

                      return (
                        <div
                          key={id}
                          className="flex flex-col w-full px-4 py-4 rounded-xl shadow-md border border-border border-opacity-30"
                        >
                          <div className="border-b border-b-border px-2 py-2 flex items-center">
                            <h1>{title}</h1>
                          </div>
                          <div className="flex w-full items-center">
                            <div className="flex w-full items-center">
                              <VictoryPie
                                data={chartData}
                                colorScale={data.datasets[0].backgroundColor}
                                labels={() => ""} // hide labels
                              />
                            </div>
                            <div className="mt-2 w-full">
                              <VictoryLegend
                                data={legendData}
                                orientation="vertical"
                                gutter={5}
                                style={{ labels: { fontSize: 36 } }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;

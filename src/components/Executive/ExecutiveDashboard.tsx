import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ChangeActivityData } from "../../data/ChangeActivityData";

const ExecutiveDashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex">
          {ChangeActivityData.map(({ id, topTitle, acitvity }) => (
            <div key={id} className="flex flex-col space-y-4">
              <h1>{topTitle}</h1>
              <div className="flex">
                {acitvity.map(({ id, title, data }) => {
                  const chartData = data.datasets[0].data.map(
                    (item, index) => ({
                      name: data.labels[index],
                      value: item,
                    })
                  );
                  return (
                    <div
                      key={id}
                      className="flex flex-col w-full px-4 py-4 rounded-xl shadow-md border border-border border-opacity-30"
                    >
                      <div className="border-b border-b-border px-2 py-2 flex items-center">
                        <h1>{title}</h1>
                      </div>
                      <div className="flex w-full ">
                        <div className="flex">
                          <PieChart
                            width={300}
                            height={300}
                            className="items-center"
                          >
                            <Pie
                              dataKey="value"
                              data={chartData}
                              cx="40%"
                              cy="40%"
                              outerRadius={100}
                              fill="#8884d8"
                            >
                              {chartData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={data.datasets[0].backgroundColor[index]}
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                              formatter={(value, entry, index) => (
                                <span style={{ color: "black" }}>{value}</span>
                              )}
                              iconSize={8}
                              layout="vertical"
                              iconType="square"
                            />
                          </PieChart>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;

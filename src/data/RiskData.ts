import { RiskProps } from "../models/Risk";

export const RiskData: RiskProps[] = [
  {
    id: "1",
    topTitle: "Risk Summary",
    title: "Risk Category",
    total: "Total",
    riskContent: [
      {
        id: "1",
        value: "Highly Intolerable",
        number: 42,
        color: "#F21212",
      },
      {
        id: "2",
        value: "Intolerable",
        number: 42,
        color: "#FF715E",
      },
      {
        id: "3",
        value: "ALARP",
        number: 42,
        color: "#FF9900",
      },
      {
        id: "4",
        value: "Maintain",
        number: 42,
        color: "#FFC700",
      },
    ],
  },
  {
    id: "2",
    topTitle: "Issue Summary",
    title: "Issue Classification",
    total: "Total",
    riskContent: [
      {
        id: "1",
        value: "Very High Impact",
        number: 42,
        color: "#5912F2",
      },
      {
        id: "2",
        value: "High Impact",
        number: 42,
        color: "#6B5EFF",
      },
      {
        id: "3",
        value: "Medium Impact",
        number: 42,
        color: "#00A3FF",
      },
      {
        id: "4",
        value: "Low Impact",
        number: 42,
        color: "#00FF66",
      },
    ],
  },
];

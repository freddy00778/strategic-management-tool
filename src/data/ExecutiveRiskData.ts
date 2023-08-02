interface RisksProps {
  id: number;
  category: Category;
  strategic: number;
  BAU: number;
  Others: number;
  Total: number;
}

type Category = {
  category: string;
  color: string;
  textColor: string;
};
export const ExecutiveRiskData: RisksProps[] = [
  {
    id: 1,
    category: {
      category: "Highly Intolerable",
      color: "#F21212",
      textColor: "#ffffff",
    },
    strategic: 27,
    BAU: 7,
    Others: 8,
    Total: 42,
  },
  {
    id: 2,
    category: {
      category: "Intolerable",
      color: "#FF715E",
      textColor: "#ffffff",
    },
    strategic: 27,
    BAU: 7,
    Others: 8,
    Total: 42,
  },
  {
    id: 3,
    category: {
      category: "ALARP",
      color: "#FF9900",
      textColor: "#ffffff",
    },
    strategic: 27,
    BAU: 7,
    Others: 8,
    Total: 42,
  },
  {
    id: 4,
    category: {
      category: "Maintain",
      color: "#FFC700",
      textColor: "#000",
    },
    strategic: 27,
    BAU: 7,
    Others: 8,
    Total: 42,
  },
];

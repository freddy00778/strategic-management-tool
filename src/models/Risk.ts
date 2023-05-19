export type RiskContent = {
  id: string;
  value: string;
  number?: number;
  color?: string;
  textColor?: string;
};

export interface RiskProps {
  id: string;
  topTitle?: string;
  title?: string;
  total?: string;
  name?: string;
  value?: string;
  riskContent?: RiskContent[];
}

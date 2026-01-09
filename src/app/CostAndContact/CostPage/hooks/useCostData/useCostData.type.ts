export interface CostProcessStep {
  step: string;
  title: string;
  subtitle?: string;
  organization?: string;
}

export interface CostChargeRow {
  duration: string;
  benefit: string;
  burden15: string;
  burden9: string;
  burden6: string;
}

export interface CostChargeTableData {
  title: string;
  columns: string[];
  rows: CostChargeRow[];
  note: string;
  footer: string;
}

export interface CostData {
  costProcessSteps: CostProcessStep[];
  costChargeTable: CostChargeTableData;
}

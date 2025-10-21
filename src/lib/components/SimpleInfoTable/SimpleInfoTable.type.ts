export interface SimpleInfoRow {
  label: string;
  value: string;
}

export interface SimpleInfoTableProps {
  data: SimpleInfoRow[];

  tableMaxWidth?: string | number;
  labelWidth?: string | number;
  valueWidth?: string | number;
  enableMobileCard?: boolean;
}

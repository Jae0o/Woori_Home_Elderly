export interface ServiceChargeRow {
  duration: string;
  benefit: string;
  burden15: string;
  burden9: string;
  burden6: string;
}

export interface HomeCareServiceChargeProps {
  chargeData: {
    rows: ServiceChargeRow[];
    footerNote: string;
  };
}

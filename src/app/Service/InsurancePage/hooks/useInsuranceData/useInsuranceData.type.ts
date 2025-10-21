export interface InsuranceIntroduction {
  title: string;
  content: string;
}

export interface InsuranceQualificationDetail {
  title: string;
  mainDescription: string;
  processDescription: string;
  applicationQualification: {
    title: string;
    description: string;
  };
}

export interface PolicyCard {
  title: string;
  cards: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface GradeTableRow {
  title: string;
  rows: {
    label: string;
    value: string;
  }[];
}

export interface InsuranceData {
  introduction: InsuranceIntroduction;
  qualification: InsuranceQualificationDetail;
  policyCards: PolicyCard;
  gradeTable: GradeTableRow;
}

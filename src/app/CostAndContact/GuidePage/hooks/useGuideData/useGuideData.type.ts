export interface StepCardData {
  step: string;
  title: string;
  subtitle?: string;
  organization?: string; // 기관명 (비용안내용)
}

export interface ApplicationInfoData {
  label: string;
  value: string;
}

export interface ProcessStepData {
  step: string;
  title: string;
  badge?: string; // 정보 라벨 (방문조사, 등급판정)
  isIntermediate?: boolean; // 중간 노드 여부 (의사소견서 제출)
}

export interface ProcessResult {
  left: string; // 등급 외
  right: string; // 1~5등급
}

export interface GuideData {
  // 재가복지센터 이용안내 (4 스텝)
  usageSteps: StepCardData[];

  // 장기요양인정 신청안내
  applicationInfo: ApplicationInfoData[];

  // 등급판정 절차 (타임라인)
  gradeProcess: ProcessStepData[];

  // 등급판정 결과 분기
  gradeResult: ProcessResult;
}

/**
 * 방문요양 페이지 데이터 타입 정의
 */

/**
 * 소개 섹션 데이터
 */
export interface IntroductionSection {
  title: string;
  content: string;
}

/**
 * 라벨-값 쌍 데이터
 */
export interface LabelValuePair {
  label: string;
  value: string;
}

/**
 * 안내 테이블 섹션
 */
export interface GuideSection {
  title: string;
  items: LabelValuePair[];
}

/**
 * 이용안내 데이터
 */
export interface GuideTableData {
  sections: GuideSection[];
}

/**
 * 요금 테이블 행 데이터
 */
export interface ServiceChargeRow {
  구분: string;
  급여원: string;
  본인부담금_15: string;
  본인부담금_9: string;
  본인부담금_6: string;
}

/**
 * 요금 테이블 데이터
 */
export interface ServiceChargeTableData {
  title: string;
  columns: string[];
  rows: ServiceChargeRow[];
  footer: string;
}

/**
 * 방문요양 서비스 상세 데이터 (SimpleInfoTable 형식)
 */
export interface DetailedServicesData {
  serviceIntroduction: LabelValuePair[];
  cognitiveActivityService: LabelValuePair[];
  familyCareService: LabelValuePair[];
  additionalServices: LabelValuePair[];
}

/**
 * 방문요양 페이지 전체 데이터
 */
export interface HomeCareData {
  introduction: IntroductionSection;
  guideTable: GuideTableData;
  serviceChargeTable: ServiceChargeTableData;
  detailedServices: DetailedServicesData;
}

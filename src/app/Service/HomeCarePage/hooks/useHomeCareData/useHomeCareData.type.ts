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
  detailedServices: DetailedServicesData;
}

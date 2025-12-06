/**
 * 후원 및 자원봉사 페이지 데이터 타입 정의
 */

/**
 * 후원 종류
 */
export interface SponsorType {
  title: string;
  description: string;
}

/**
 * 후원 방법
 */
export interface SponsorMethod {
  label: string;
  value: string;
}

/**
 * 자원봉사 참여 스텝
 */
export interface VolunteerStep {
  step: string;
  title: string;
  subtitle?: string;
}

/**
 * 활동 및 예약시간
 */
export interface VolunteerSchedule {
  label: string;
  value: string;
}

/**
 * 자원봉사 활동 내용
 */
export interface VolunteerActivity {
  category: string;
  content: string;
}

/**
 * 후원 및 자원봉사 페이지 전체 데이터
 */
export interface SponsorVolunteerData {
  sponsorTypes: SponsorType[];
  sponsorMethods: SponsorMethod[];
  volunteerSteps: VolunteerStep[];
  volunteerSchedule: VolunteerSchedule[];
  volunteerActivities: VolunteerActivity[];
}

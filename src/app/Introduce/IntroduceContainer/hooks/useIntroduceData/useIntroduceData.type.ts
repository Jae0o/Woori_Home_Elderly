export interface VisionMissionItem {
  title: string;
  description: string;
  icon?: string;
}

export interface HistoryItem {
  year: string;
  month: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon?: string;
}

export interface IntroduceData {
  greeting: {
    title: string;
    ceoName: string;
    messages: string[];
    closingMessage: string;
  };
  vision: string;
  mission: string;
  coreValues: CoreValue[];
  history: HistoryItem[];
  organizationChart: {
    title: string;
    description: string;
  };
}

export interface UseIntroduceDataReturn {
  data: IntroduceData;
  isLoading: boolean;
  error: Error | null;
}

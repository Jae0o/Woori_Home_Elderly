export interface GuideSection {
  title: string;
  content: string | string[];
}

export interface HomeCareGuideProps {
  guideData: GuideSection[];
}

import { SimpleInfoTable } from "@lib/components";

import type { ApplicationInfoData } from "../../hooks";

interface ApplicationInfoSectionProps {
  data: ApplicationInfoData[];
}

const ApplicationInfoSection = ({ data }: ApplicationInfoSectionProps) => {
  return (
    <SimpleInfoTable
      data={data}
      tableMaxWidth="100rem"
      labelWidth="20rem"
      enableMobileCard={true}
      variant="detailed"
    />
  );
};

export default ApplicationInfoSection;

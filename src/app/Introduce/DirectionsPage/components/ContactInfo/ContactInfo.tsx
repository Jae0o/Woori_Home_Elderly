import { SimpleInfoTable } from "@lib/components";
import { COMPANY_INFO } from "@lib/constants";

const contactData = [
  { label: "주소", value: COMPANY_INFO.ADDRESS },
  { label: "전화", value: COMPANY_INFO.TEL },
  { label: "팩스", value: COMPANY_INFO.FAX },
  { label: "이메일", value: COMPANY_INFO.EMAIL },
];

const ContactInfo = () => {
  return (
    <div className="w-full max-w-[80rem]">
      <SimpleInfoTable
        data={contactData}
        tableMaxWidth="80rem"
        labelWidth="20rem"
      />
    </div>
  );
};

export default ContactInfo;

import { SimpleInfoTable } from "@lib/components";

const operatingHoursData = [
  { label: "평일", value: "09:00 - 18:00" },
  { label: "토요일", value: "09:00 - 13:00" },
  { label: "일요일/공휴일", value: "휴무" },
];

const OperatingHours = () => {
  return (
    <div className="w-full max-w-[60rem]">
      <SimpleInfoTable
        data={operatingHoursData}
        tableMaxWidth="60rem"
        labelWidth="20rem"
      />
    </div>
  );
};

export default OperatingHours;

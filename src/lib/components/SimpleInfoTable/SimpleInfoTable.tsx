import { twMerge } from "tailwind-merge";

import type { SimpleInfoTableProps } from "./SimpleInfoTable.type";

const SimpleInfoTable = ({
  data,
  tableMaxWidth = "60rem",
  labelWidth = "16rem",
  valueWidth = "*",
  enableMobileCard = false,
}: SimpleInfoTableProps) => {
  return (
    <>
      {/* Desktop Table View */}
      <table
        className={twMerge(
          "w-full rounded-[0.8rem] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
          enableMobileCard && "max-mobile:hidden",
        )}
        style={{ maxWidth: tableMaxWidth }}
      >
        <colgroup>
          <col style={{ width: labelWidth }} />
          <col style={{ width: valueWidth }} />
        </colgroup>

        <tbody className="w-full">
          {data.map(({ label, value }) => (
            <tr
              key={label}
              className="w-full border-b-[0.1rem] border-b-gray-200 last:border-b-0"
            >
              <td className="h-auto px-[1.6rem] py-[1.2rem] bg-primary text-white text-[1.4rem] font-[600] text-center border-r-[0.1rem] border-r-white/20">
                {label}
              </td>

              <td className="h-auto px-[2rem] py-[1.2rem] text-[1.4rem] font-[500] text-center bg-white break-keep">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card View */}
      {enableMobileCard && (
        <div
          className="w-full flex flex-col gap-[1.6rem] sm:hidden"
          style={{ maxWidth: tableMaxWidth }}
        >
          {data.map(({ label, value }) => (
            <div
              key={label}
              className="w-full bg-white rounded-[1.2rem] shadow-md overflow-hidden border border-gray-200"
            >
              <div className="bg-primary text-white text-[1.4rem] max-mobile:text-[1.3rem] font-[600] text-center px-[1.6rem] py-[1rem]">
                {label}
              </div>
              <div className="bg-white text-[1.4rem] max-mobile:text-[1.3rem] font-[500] text-center px-[2rem] py-[1.6rem] leading-[1.7] break-keep">
                {value}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SimpleInfoTable;

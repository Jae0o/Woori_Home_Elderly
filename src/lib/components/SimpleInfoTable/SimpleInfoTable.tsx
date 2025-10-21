import Card from "../Card/Card";
import type { SimpleInfoTableProps } from "./SimpleInfoTable.type";

import { twMerge } from "tailwind-merge";

const SimpleInfoTable = ({
  data,
  tableMaxWidth = "60rem",
  labelWidth = "16rem",
  valueWidth = "*",
  enableMobileCard = false,
  variant = "compact",
}: SimpleInfoTableProps) => {
  // Variant-based styles
  const isDetailed = variant === "detailed";
  const valueStyles = isDetailed
    ? "px-[2rem] py-[1.6rem] text-[1.5rem] font-[500] text-left align-top"
    : "px-[2rem] py-[1.2rem] text-[1.4rem] font-[500] text-center";
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

              <td className={twMerge("h-auto bg-white break-keep", valueStyles)}>
                {isDetailed ? <p className="whitespace-pre-line leading-[1.8]">{value}</p> : value}
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
            <Card
              key={label}
              variant="default"
              className="w-full p-0 overflow-hidden"
            >
              <div className="bg-primary text-white text-[1.4rem] max-mobile:text-[1.3rem] font-[600] text-center px-[1.6rem] py-[1rem]">
                {label}
              </div>
              <div
                className={twMerge(
                  "bg-white break-keep",
                  isDetailed
                    ? "text-[1.4rem] max-mobile:text-[1.3rem] font-[500] text-left px-[2rem] py-[1.6rem]"
                    : "text-[1.4rem] max-mobile:text-[1.3rem] font-[500] text-center px-[2rem] py-[1.6rem]",
                )}
              >
                {isDetailed ? <p className="whitespace-pre-line leading-[1.8]">{value}</p> : value}
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default SimpleInfoTable;

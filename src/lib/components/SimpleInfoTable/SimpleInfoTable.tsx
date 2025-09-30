import type { SimpleInfoTableProps } from "./SimpleInfoTable.type";

const SimpleInfoTable = ({
  data,
  tableMaxWidth = "60rem",
  labelWidth = "16rem",
  valueWidth = "*",
}: SimpleInfoTableProps) => {
  return (
    <table
      className="w-full rounded-[0.8rem] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
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
            <td className="h-[4.4rem] bg-primary text-white text-[1.4rem] font-[600] text-center border-r-[0.1rem] border-r-white/20">
              {label}
            </td>

            <td className="h-[4.4rem] text-[1.4rem] font-[500] text-center bg-white">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleInfoTable;

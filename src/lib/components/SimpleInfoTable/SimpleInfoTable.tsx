import type { SimpleInfoTableProps } from "./SimpleInfoTable.type";

const SimpleInfoTable = ({
  data,
  tableMaxWidth = "60rem",
  labelWidth = "16rem",
  valueWidth = "*",
}: SimpleInfoTableProps) => {
  return (
    <table
      className="w-full"
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
            className="w-full h-[3.6rem] min-h-[3.6rem] border-[0.1rem] border-primary"
          >
            <td className="h-full min-h-[3.6rem] flex items-center justify-center bg-primary text-white text-[1.4rem] font-[700]">
              {label}
            </td>

            <td className="h-full min-h-[3.6rem] text-[1.2rem] font-[500] text-center">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleInfoTable;

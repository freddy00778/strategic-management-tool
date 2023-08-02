import { ReactNode } from "react";
import styles from "./Table.module.css";

interface TableProps<T> {
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
    render?: (row: T) => ReactNode;
  }>;
  striped?: boolean;
  onRowClick?: (row: T) => void;
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  striped = false,
  onRowClick,
}: TableProps<T>): JSX.Element => {
  return (
    <table className={striped ? styles.stripedTable : ""}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            onClick={() => onRowClick && onRowClick(row)}
            style={{ cursor: onRowClick ? "pointer" : "default" }}
          >
            {columns.map((column) => (
              <td key={String(column.key)}>
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

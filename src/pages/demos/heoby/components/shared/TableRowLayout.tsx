import type { ReactNode } from "react";
import type { TableColumnConfig } from "../../types/table";

interface TableRowLayoutProps {
    columns: TableColumnConfig[];
    cells: ReactNode[];
    className?: string;
    paddingClassName?: string;
    gap?: number;
}

export function TableRowLayout({
    columns,
    cells,
    className = "",
    paddingClassName = "px-4 py-3",
    gap = 8,
}: TableRowLayoutProps) {
    return (
        <div
            className={`flex items-center ${className} ${paddingClassName}`}
            style={{ gap }}
        >
            {columns.map((col, index) => (
                <div
                    key={index}
                    style={{
                        flex: col.flex,
                        textAlign: col.align || "left",
                        minWidth: 0,
                    }}
                >
                    {cells[index]}
                </div>
            ))}
        </div>
    );
}

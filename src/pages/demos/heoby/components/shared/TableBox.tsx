import type { ReactNode } from "react";
import { BaseBox } from "./BaseBox";
import { TableRowLayout } from "./TableRowLayout";
import type { TableColumnConfig } from "../../types/table";

export type { TableColumnConfig };

interface TableBoxProps {
    title?: string;
    columns?: TableColumnConfig[];
    children: ReactNode;
    className?: string;
    bodyPadding?: number;
}

export function TableBox({
    title,
    columns,
    children,
    className,
    bodyPadding = 0,
}: TableBoxProps) {
    return (
        <BaseBox
            title={title}
            className={className}
            contentPadding={bodyPadding}
            contentClassName="flex flex-col"
            scrollable
        >
            {columns && (
                <div className="sticky top-0 z-10 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
                    <TableRowLayout
                        columns={columns}
                        cells={columns.map((col) => (
                            <span className="text-xs font-semibold text-gray-500">
                                {col.label}
                            </span>
                        ))}
                        paddingClassName="px-4 py-3 md:px-5"
                        gap={12}
                    />
                </div>
            )}
            <div className="flex-1">{children}</div>
        </BaseBox>
    );
}

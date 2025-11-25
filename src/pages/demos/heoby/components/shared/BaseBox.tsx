import { type ReactNode } from "react";

interface BaseBoxProps {
    title?: string;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    contentPadding?: number;
    scrollable?: boolean;
}

export function BaseBox({
    title,
    children,
    className = "",
    contentClassName = "",
    contentPadding = 16,
    scrollable = false,
}: BaseBoxProps) {
    return (
        <div className={`flex flex-col rounded-2xl bg-white shadow-sm border border-gray-100 ${className}`}>
            {title && (
                <div className="border-b border-gray-100 px-5 py-4">
                    <h3 className="font-bold text-gray-900">{title}</h3>
                </div>
            )}
            <div
                className={`flex-1 ${contentClassName} ${scrollable ? "overflow-y-auto" : ""}`}
                style={{ padding: contentPadding }}
            >
                {children}
            </div>
        </div>
    );
}

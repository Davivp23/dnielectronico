import React, { FC, ReactNode } from "react";

export interface InfoProps {
    title: string;
    description?: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
    className?: string;
}
const Info: FC<InfoProps> = ({
    title,
    description,
    icon,
    children,
    className,
}) => {
    return (
        <div
            role="status"
            aria-live="polite"
            className= {`w-100% flex flex-start rounded-lg py-2 px-1 bg-azul-claro ${className}`}
        >
            {icon ? <div className="flex align-items-center justify-content-center mx-3">{icon}</div> : null}
            <div className="flex flex-col">
                <h3 className="font-extrabold text-l text-azul">{title}</h3>
                {description ? <p className="text-negro text-sm mr-2">{description}</p> : null}
                {children}
            </div>
        </div>
    );
};

export default Info;
"use client"

import { MenuItem } from '@headlessui/react';
import Link from 'next/link';

export interface DropdownItemProps {
    title?: string;
    href?: string;
}
const DropdownItem: React.FC<DropdownItemProps> = ({
    title,
    href,
}) => {
    return (
        <MenuItem>
                <Link
                    href={`${href}`}
                    className= "bg-azul-claro text-azul block px-4 py-2 text-sm hover:opacity-70"
                >
                    {title}
                </Link>
        </MenuItem>
    );
};

export default DropdownItem;
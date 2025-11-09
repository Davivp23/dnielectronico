"use client"; 

import React, { Fragment } from 'react';
import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import { Familjen_Grotesk } from 'next/font/google';

export interface DropdownProps {
    buttonText: string;
    children: React.ReactNode;
}
const Dropdown: React.FC<DropdownProps> = ({
    buttonText,
    children,
}) => {
    return (
        <Menu as="div" className="w-56 relative inline-block text-left">
            <div>
                <MenuButton className="w-1/1 inline-flex bg-azul text-blanco px-4 py-2 text-sm font-medium hover:opacity-70 focus:outline-none focus:ring-none justify-between">
                    {buttonText}
                    <span className="place-self-end">▼</span> {/* O ▾ , ↓ , ⌄ ... */}
                </MenuButton>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems modal={false} className="zindex-15 w-56 rounded-md bg-azul-claro focus:outline-none focus:ring-none justify-between">
                    <div className="py-1">
                        {children}
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    );
}

export default Dropdown;
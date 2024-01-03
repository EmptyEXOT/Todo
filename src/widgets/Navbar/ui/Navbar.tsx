'use client'

import React, {FC, useState} from 'react';
import classNames from "classnames";
import Image from "next/image";
import Logo from './Logo.svg'
import cls from './Navbar.module.css'
import Button from "@/shared/ui/Button/Button";
import Menu from './Menu'
import MenuIcon from './Menu.svg'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div
                className={classNames('bg-amber-100 md:bg-amber-200 z-50 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto px-4 py-2 z-50')}>
                    <Image alt={'logo'} src={Logo}></Image>
                    <div className={classNames('hidden md:flex justify-center')}>
                        <Button>Service 1</Button>
                        <Button>Service 2</Button>
                        <Button>Service 3</Button>
                        <Button>Service 4</Button>
                    </div>
                    <Button onClick={() => setIsOpen(prevState => !prevState)} className={classNames('md:hidden pe-0')}>
                        <Image alt={'menu'} src={MenuIcon} width={36} height={24}></Image>
                    </Button>
                </div>
            </div>
            <Menu isOpen={isOpen}/>
        </>

    );
};

export default Navbar;
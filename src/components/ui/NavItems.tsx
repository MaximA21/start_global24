"use client";
import React, {useEffect} from "react";
import {PRODUCT_CATEGORIES} from "@/config";
import {NavItem} from "@/components/ui/NavItem";
import {useOnClickOutside} from "@/hooks/use-on-click-outside";


export const NavItems = () => {
    const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
    const isAnyOpen = activeIndex !== null;
    const navRef = React.useRef<HTMLDivElement | null>(null);
    useOnClickOutside(navRef, () => setActiveIndex(null));

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveIndex(null)
            }
        }

        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, [])
    return (
        <div className={"flex gap-4 h-full "} ref={navRef}>

            {PRODUCT_CATEGORIES.map((cat, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(i)
                    }
                }
                const isOpen = i === activeIndex;

                return <NavItem
                    category={cat}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    isAnyOpen={isAnyOpen}
                    key={cat.value}/>;
            })}

        </div>
    );
};
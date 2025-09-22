"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-5 inset-x-0 z-50 h-16 shadow-md flex items-center justify-center px-4 dark:bg-black", className)}
    >
        
        <Menu setActive={setActive}>
            <Link href={"/"} className="mr-8">
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            

            <MenuItem setActive={setActive} active={active} item="Our Musics">
            <div className="text-white flex flex-col space-y-4 text-sm">
                <HoveredLink href="/musics">All Musics</HoveredLink>
                <HoveredLink href="/musics">Liked Music</HoveredLink>
                <HoveredLink href="/musics">Playlist Music</HoveredLink>
                </div>
            </MenuItem>

            <Link href={"/contact"} className="mr-8">
                <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Link>
            
                
        </Menu>
        </div>
    
  )
}

export default Navbar
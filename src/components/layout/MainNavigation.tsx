"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import Link from "next/link";
import { ModeToggle } from "../mode-toogle";

const MainNavigation = () => {
    return (
        <header className="w-full h-16 flex items-center justify-between px-10 border-b border-gray-300">
            <div className=" font-bold text-xl">Next JS Meetup</div>
            <NavigationMenu>
                <NavigationMenuList className="ml-6 flex space-x-6">
                    <NavigationMenuItem>
                        <Link href="/" passHref>
                            <div className="font-normal mt-2">
                                All Meetups
                            </div>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/new-meetup" passHref>
                            <div className="font-normal mt-2">
                                New
                            </div>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            
        </header>
    )
};

export default MainNavigation;
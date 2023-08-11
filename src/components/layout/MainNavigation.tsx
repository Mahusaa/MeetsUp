"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import Link from "next/link";

const MainNavigation = () => {
    return (
        <header className="w-full h-20 flex items-center justify-between bg-black px-10">
            <div className="text-white font-bold text-xl">Next JS Meetup</div>
            <NavigationMenu>
                <NavigationMenuList className="ml-6 flex space-x-6">
                    <NavigationMenuItem>
                        <Link href="/" passHref>
                            <div className="text-white font-normal hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                                All Meetups
                            </div>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/new-meetup" passHref>
                            <div className="text-white font-normal hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                                Add New Meetup
                            </div>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
};

export default MainNavigation;
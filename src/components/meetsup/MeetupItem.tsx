import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface MeetupItemProps {
    image: string;
    title: string;
    address: string;
    id: string
}

const MeetupItem: React.FC<MeetupItemProps> = ({ image, title, address, id }) => {
    return (
        <li >
            <Card className="mx-80 my-5 px-5">
                <CardHeader className="text-center">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{address}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <Image src={image} alt={title} width={500} height={500}/>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    <Link href={`/details/${id}`}>
                    <Button>Show Details</Button>
                    </Link>
                </CardFooter>
            </Card>
        </li>

    )
};

export default MeetupItem;
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface MeetupItemProps {
    image: string;
    title: string;
    address: string;
    id: string
}

const MeetupItem: React.FC<MeetupItemProps> = ({ image, title, address }) => {
    return (
        <li >
            <Card className="mx-80 my-5 px-5">
                <CardHeader className="text-center">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{address}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <img src={image} alt={title} />
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    <Button>Show Details</Button>
                </CardFooter>
            </Card>
        </li>

    )
};

export default MeetupItem;
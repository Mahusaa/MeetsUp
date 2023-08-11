"use client"
import React, { useRef } from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { MeetupData } from "@/models/meetup-models";

interface NewMeetupFormProps {
    onAddMeetup: (meetupData: MeetupData) => void
}

const NewMeetupForm: React.FC<NewMeetupFormProps> = ({onAddMeetup}) => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
    function submitHandler(e: React.FormEvent) {
        e?.preventDefault();

        const enteredTitle = titleInputRef.current!.value;
        const enteredImage = imageInputRef.current!.value;
        const enteredAddress = addressInputRef.current!.value;
        const enteredDescription = descriptionInputRef.current!.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        onAddMeetup(meetupData)
    }
    return (
        <Card className="w-[650px] my-10 mx-auto p-6">
            <CardHeader>
                <CardTitle>Make a new Meet up</CardTitle>
                <CardDescription>This can make a new meet up schedule for you</CardDescription>
            </CardHeader>
            <form onSubmit={submitHandler}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Meetup Title</Label>
                        <Input
                            id="title"
                            placeholder="Title of your project"
                            ref={titleInputRef} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="image">Meetup Image</Label>
                        <Input id="image"
                            placeholder="Input your url image here"
                            ref={imageInputRef} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="address">Address</Label>
                        <Input
                            id="address"
                            placeholder="Input your address here"
                            ref={addressInputRef} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Input your description here"
                            rows={5}
                            required
                            style={{ resize: "none" }}
                            ref={descriptionInputRef}
                        />
                    </div>
                </div>
                <CardFooter className="flex justify-end">
                    <Button className="mt-5">Add Meetup</Button>
                </CardFooter>
            </form>
        </Card>
    )
};

export default NewMeetupForm;
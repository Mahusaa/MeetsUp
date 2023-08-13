"use client"

import { useRouter } from 'next/navigation';
import NewMeetupForm from "@/components/meetsup/NewMeetupForm"
import { MeetupData } from "@/models/meetup-models";

const NewMeetup = () => {
    const router = useRouter();

    async function addMeetupHandler(meetupData: MeetupData) {
        const response = await fetch("/api", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
};

export default NewMeetup;

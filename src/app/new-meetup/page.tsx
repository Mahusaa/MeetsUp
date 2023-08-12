"use client"
import NewMeetupForm from "@/components/meetsup/NewMeetupForm"
import { MeetupData } from "@/models/meetup-models";

const NewMeetup = () => {
    async function addMeetupHandler(meetupData: MeetupData) {
        const response = await fetch("/api/new-meetup",{
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data)
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
};

export default NewMeetup;
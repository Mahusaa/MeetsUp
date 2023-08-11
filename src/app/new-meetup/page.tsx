"use client"
import NewMeetupForm from "@/components/meetsup/NewMeetupForm"
import { MeetupData } from "@/models/meetup-models";

const NewMeetup = () => {
    function addMeetupHandler(meetupData: MeetupData) {
        console.log(meetupData)
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
};

export default NewMeetup;
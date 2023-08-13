import { getData } from "@/service/meetupService";

const MeetupDetails = async ({ params }: { params: { meetupid: string } }) => {
    const data = await getData();
    
    return (
      <h1>{params.meetupid}</h1>
    );
  };
  
  export default MeetupDetails;
  
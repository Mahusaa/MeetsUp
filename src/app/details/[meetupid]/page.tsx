import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/service/meetupService";
import Image from "next/image";

const MeetupDetails = async ({ params }: { params: { meetupid: string } }) => {
    const data = await getData();
    const dataMeet = data.find((meet) => meet.id === params.meetupid);
    return (
        <Card className="mx-80 my-5 px-5">
            <CardHeader>
                <CardTitle>
                    {dataMeet?.title}
                </CardTitle>
                <CardDescription>
                    {dataMeet?.address}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={dataMeet?.image || '/default-image.jpg'} alt={dataMeet?.title || "Yuhu"}
                    width={600} height={600}>
                </Image>
                <CardDescription className="my-5">
                    {dataMeet?.description}
                </CardDescription>
            </CardContent>

        </Card>

    );
};

export default MeetupDetails;

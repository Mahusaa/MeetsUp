import { MongoClient } from "mongodb";

interface Meetup {
    _id: { toString(): string};
    title: string;
    image: string;
    address: string;
    description: string
}

interface SimplifiedMeetup {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string
}

export async function getData(): Promise<SimplifiedMeetup[]> {
    const client = await MongoClient.connect(
      'mongodb+srv://hakaro375:YOgBw04zhHYBXAdT@mycluster.feuwh5k.mongodb.net/meetsup?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection<Meetup>('meetsup');
    const meetups = await meetupsCollection.find().toArray();

    const simplifiedMeetups = meetups.map((meet: Meetup) => ({
        id: meet._id.toString(),
        title: meet.title,
        image: meet.image,
        address: meet.address,
        description: meet.description
    }));
    
    client.close();
    return simplifiedMeetups;
}

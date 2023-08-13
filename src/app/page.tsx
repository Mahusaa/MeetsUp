import MeetsUpList from "@/components/meetsup/MeetsUpList";
import { MongoClient } from "mongodb"
import { ReactElement } from "react";

interface Meetup {
  _id: { toString(): string};
  title: string;
  image: string;
  address: string
}

export default async function HomePage(): Promise<ReactElement> {
  const data = await getData();
  const meetup = data.map((meet: Meetup) => ({
    id: meet._id.toString(),
    title: meet.title,
    image: meet.image,
    address: meet.address,
  }));
  return <MeetsUpList meetsup={meetup} />;
}

async function getData(): Promise<Meetup[]> {
  const client = await MongoClient.connect(
    'mongodb+srv://hakaro375:YOgBw04zhHYBXAdT@mycluster.feuwh5k.mongodb.net/meetsup?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection<Meetup>('meetsup');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return meetups;
}
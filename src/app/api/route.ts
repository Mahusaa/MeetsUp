import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const client = await MongoClient.connect(
        'mongodb+srv://hakaro375:YOgBw04zhHYBXAdT@mycluster.feuwh5k.mongodb.net/meetsup?retryWrites=true&w=majority'
    );
    const db = client.db();
    // Use the 'db' object to work with the database collections
    const meetsupCollection = db.collection('meetsup');
    const result = await meetsupCollection.insertOne(data);

    console.log(result);
    console.log("yuhu")
    await client.close();
    return NextResponse.json(result);
}

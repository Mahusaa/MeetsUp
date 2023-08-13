import MeetsUpList from "@/components/meetsup/MeetsUpList";
import { ReactElement } from "react";
import { getData } from "@/service/meetupService";



export default async function HomePage(): Promise<ReactElement> {
  const data = await getData();
  return <MeetsUpList meetsup={data} />;
}

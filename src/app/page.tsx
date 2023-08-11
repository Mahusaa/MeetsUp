import MeetsUpList from "@/components/meetsup/MeetsUpList";

const DUMMY_MEETSUP = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png",
    address: "some address"
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png",
    address: "some address in jakarta"
  }
]

export default function HomePage() {
  return (
    <MeetsUpList meetsup={DUMMY_MEETSUP}/>
  );
}

import MeetupItem from "./MeetupItem"

interface MeetUp {
    id: string;
    image: string;
    title: string;
    address: string;
};

interface MeetsUpListProps {
    meetsup: MeetUp[];
}
const MeetsUpList: React.FC<MeetsUpListProps> = ({ meetsup }) => {
    return (
        <ul>
            {meetsup.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    )
};

export default MeetsUpList;
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_640.jpg",
    address: "Some address 5, 12344 some city",
    description: "this is the first city",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_640.jpg",
    address: "Some address 5, 12344 some city",
    description: "this is the  second city",
  },
];

function HomePage(props) {
  //const [loadedMeetups, setLoadedMeetups]= useState([])

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;

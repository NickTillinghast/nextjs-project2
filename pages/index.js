import { getFeaturedEvents } from '../helpers/api-util';

// import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';


function HomePage(props) {

    // const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <EventList items={props.events} />
        </div>
    )
}
// get static props 
export async function getStaticProps(context) {
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
}

export default HomePage;
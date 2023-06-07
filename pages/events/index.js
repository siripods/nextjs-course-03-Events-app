import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list';
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <div>
            <h1>All Events</h1>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    );
}

export default AllEventsPage;
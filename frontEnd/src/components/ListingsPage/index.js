import { fetch } from "../../store/csrf";
import { useEffect } from "react";

const ListingsPage = () => {

    const [listings, setListings] = useState([]);
    useEffect(() => {
        const response = await fetch("/api/listings");
        setListings(response.data.listings);
    }, []);

    return (
        <div id="listings-page">
            <h2>Your oasis awaits</h2>
            {!listings && <h3>Taking you to the trees...</h3>}
            {listings && listings.map((listing) => {
                return <h3>{listing.name}</h3>;
            })};
        </div>
    );
};

export default ListingsPage;
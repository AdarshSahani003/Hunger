import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { PromotedRestaurant} from "./RestaurantCard";
import { MAIN_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")
    const {loggedIn, setUser} = useContext(UserContext)

    const ProRestaurant = PromotedRestaurant(RestaurantCard);
      
      
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {

            const data = await fetch(MAIN_API)

            const json = await data.json();

            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log(json?.data?.cards[2]?.card?.card);
            // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);

        }
        catch (err) {
            console.log(err);
        }

    }
    
    if (listOfRestaurants.length === 0) {
        return (
          <div className="flex flex-wrap justify-center">
            {Array(10).fill("").map((_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        );
      }

    return (
        <>
            <div className="flex gap-2 w-6/7 item mx-auto">
                <div className=" mx-auto mt-2">
                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)}
                        className=" bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 "
                        placeholder="Search here..."></input>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants
                                .filter((data) => data.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredRestaurant);
                        }}>
                        Search
                    </button>
                </div>
                <div className=" mx-auto">
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((data) => data.info.avgRating >= 4.2);
                            setFilteredRestaurants(filteredRestaurant);
                        }}>Best</button>
                    <input className="bg-slate-200 p-2 m-1 rounded-xl" value={loggedIn} onChange={(e)=>{setUser(e.target.value)}}/>

                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-4 w-5/6 items-center mx-auto">
                {filteredRestaurants.map((rest) => (


                    <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>
                        {rest.info.avgRating > 4.2 ? <ProRestaurant props={rest} /> : <RestaurantCard props={rest} />}
                    </Link>

                ))}
            </div>
        </>
    )
}

export default Body;
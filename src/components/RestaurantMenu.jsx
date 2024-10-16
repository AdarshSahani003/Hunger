import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [resInfo, setResInfo] = useState(null);
    const [show, setShow] = useState(0);

    useEffect(() => {

        const fetchData = async () => {

            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            setResInfo(json)
        };

        fetchData();
    }, [resId]);

    if(!resInfo) return <Shimmer/>

    const { name, city, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredRestaurant = itemCards.filter(item => item.card.card["@type"]
        === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return(
        <div className="text-center m-auto ">
            <h1 className="font-bold text-6xl">{name}</h1>
            <h2 className="font-bold text-2xl">{cuisines?.join(", ")} - {city}</h2>
            {filteredRestaurant.map((categories, index) => (
                <RestaurantCategory 
                key={categories?.card?.card.title}  
                categories={categories?.card?.card}
                show={index === show ? true : false}
                setShow={() => setShow(index)}
                setNull={() => setShow(null)}
                />))}
        </div>
    );
}

export default RestaurantMenu;